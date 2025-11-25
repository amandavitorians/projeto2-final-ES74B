const express = require('express');
const router = express.Router();
const { query, body, validationResult } = require('express-validator');
const Item = require('../models/Item');
const jwt = require('jsonwebtoken');
const cache = require('../config/cache');

function authMiddleware(req, res, next) {
  const auth = req.headers['authorization'];
  if (!auth) return res.status(401).json({ message: 'Token ausente' });
  const token = auth.split(' ')[1];
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = payload;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Token inválido' });
  }
}

router.get('/',
  authMiddleware,
  query('term').optional().trim().escape(),
  query('limit').optional().toInt(),
  async (req, res) => {
    const term = req.query.term || '';
    const limit = Math.min(req.query.limit || 20, 100);

    const cacheKey = `items:${term}:${limit}`;
    const cached = cache.get(cacheKey);
    if (cached) return res.json({ cached: true, data: cached });

    const filter = term ? { $or: [
      { title: new RegExp(term, 'i') },
      { description: new RegExp(term, 'i') },
      { tags: new RegExp(term, 'i') }
    ] } : {};

    const items = await Item.find(filter).limit(limit).lean();
    cache.set(cacheKey, items, 30);
    res.json({ cached: false, data: items });
  }
);

router.post('/',
  authMiddleware,
  body('title').trim().notEmpty().withMessage('title é obrigatório').escape(),
  body('description').optional().trim().escape(),
  body('sourceUrl').optional().isURL().withMessage('sourceUrl inválido'),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    const { title, description, sourceUrl, tags } = req.body;
    const item = new Item({
      title,
      description,
      sourceUrl,
      tags: Array.isArray(tags) ? tags : (typeof tags === 'string' ? tags.split(',').map(t=>t.trim()) : [])
    });
    item.createdBy = req.user.sub;
    await item.save();

    cache.flush();

    res.status(201).json({ message: 'Item criado', item });
  }
);

module.exports = router;

require('dotenv').config();
const express = require('express');
const app = express();
const { connectDB } = require('./config/db');
const helmet = require('helmet');
const compression = require('compression');
const cors = require('cors');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');

const authRoutes = require('./routes/auth.routes');
const itemsRoutes = require('./routes/items.routes');

const PORT = process.env.PORT || 4000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/projeto2db';

(async () => {
  try {
    await connectDB(MONGODB_URI);
    console.log('MongoDB conectado');

    // middlewares
    app.use(helmet());
    app.use(cors());
    app.use(compression());
    app.use(express.json({ limit: '5mb' }));
    app.use(morgan('combined'));

    // rate limiter
    const limiter = rateLimit({
      windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS || '60000'),
      max: parseInt(process.env.RATE_LIMIT_MAX || '120')
    });
    app.use(limiter);

    // routes
    app.use('/api/auth', authRoutes);
    app.use('/api/items', itemsRoutes);

    // health
    app.get('/health', (req, res) => res.json({ status: 'ok' }));

    app.listen(PORT, () => console.log(`API rodando em http://localhost:${PORT}`));
  } catch (err) {
    console.error('Erro inicializando app', err);
    process.exit(1);
  }
})();

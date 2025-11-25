require('dotenv').config();
const bcrypt = require('bcrypt');
const { connectDB } = require('./src/config/db');
const User = require('./src/models/User');

(async () => {
  await connectDB(process.env.MONGODB_URI || 'mongodb://localhost:27017/projeto2db');
  const pw = 'senha123';
  const hash = await bcrypt.hash(pw, 10);
  const user = new User({ username: 'teste', passwordHash: hash });
  await user.save();
  console.log('Usuário criado: teste / senha123');
  process.exit(0);
})();

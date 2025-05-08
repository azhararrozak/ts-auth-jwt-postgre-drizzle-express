import express from 'express';
import dotenv from 'dotenv';
import { pool } from './config/db';
import cors from 'cors'; 
import authRoutes from './routes/auth.routes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors(
  {
    origin: '*',
  }
));
app.use(express.json());

pool
  .connect()
  .then(() => {
    console.log('✅ Connected to PostgreSQL');
  })
  .catch((err) => {
    console.error('❌ Failed to connect to PostgreSQL:', err);
  });

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://127.0.0.1:${PORT}`);
});
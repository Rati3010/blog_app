import express from 'express';
import dotenv from 'dotenv';
import connection from './config/db.js';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';

dotenv.config();
const app = express();
app.use(express.json());

app.get('/test', (req, res) => {
  res.json({ message: 'Api is working' });
});
app.use('/api/user',userRoutes);
app.use('/api/auth',authRoutes);

app.listen(process.env.PORT || 8080, async () => {
  try {
    await connection;
    console.log('Successfully established the connection with DB');
  } catch (error) {
    console.log(error);
  }
});

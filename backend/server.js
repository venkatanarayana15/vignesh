import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import usermodel from './model/User.js';
import cors from 'cors'
const app = express();
app.use(express.json());

dotenv.config();
app.use(cors())
app.post('/user', async (req, res, next) => {
  try {
    const { name, password } = req.body;
    const user = await usermodel.create({ name, password });
    res.status(200).json({ user });
    console.log(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
});

async function main() {
  try {
    await mongoose.connect(process.env.MONGODB);
    console.log('MongoDB connected');
  } catch (error) {
    console.error(error);
  }
}

main().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });
});

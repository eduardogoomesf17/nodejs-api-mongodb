import express from 'express';
import mongoose from 'mongoose';

import userRoutes from './src/routes/userRoutes';

const app = express();

mongoose.connect('mongodb+srv://eduardogoomesf:Letodie15@cursojs01-dxic7.mongodb.net/Aprendendo?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Routes
app.use('/', userRoutes);

export default app;

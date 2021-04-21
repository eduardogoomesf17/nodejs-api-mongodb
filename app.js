import express from 'express';
import mongoose from 'mongoose';

import userRoutes from './src/routes/userRoutes';

const app = express();

mongoose.connect('', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Routes
app.use('/', userRoutes);

export default app;

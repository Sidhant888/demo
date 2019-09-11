import express from 'express';
import path from 'path';
import usersRoutes from './users.js'


const router = express.Router();

// mount user routes at /weather
router.use('/user', usersRoutes);


export default router;
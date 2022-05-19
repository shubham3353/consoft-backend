import express from 'express';
const router = express.Router();
import AdminController from '../controllers/adminController.js';

// router.get('/get-data', AdminController.getData)
router.get("/", (req, res) => {
    res.send("Let's build a CRUD API!");
  });

export default router
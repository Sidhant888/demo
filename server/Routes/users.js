import express from 'express';
import Users from '../Controller/users.js';

const router = express.Router();

router.route('/getDetails')
  .get(Users.getDetails);

module.exports = router;

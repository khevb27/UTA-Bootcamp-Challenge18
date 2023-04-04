const router = require('express').Router();
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');
const { User } = require('../../models');

router.use('/users', userRoutes);
router.use('/thought', thoughtRoutes);

module.exports = router;

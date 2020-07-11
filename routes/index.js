const movies=require('./movie.route');
const {Router} = require('express');
const router = Router();
const users=require('./users.route');
//router
router.use('/api',movies);
router.use('/api',users);

 module.exports= router;

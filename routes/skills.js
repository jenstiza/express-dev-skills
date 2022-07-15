var express = require('express');
var router = express.Router();

//require the controller
var skillsCtrl = require('../controllers/skills');

//all actual paths start with /skills

router.get('/', skillsCtrl.index);

router.get('/:id', skillsCtrl.show);
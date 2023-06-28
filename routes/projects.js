const express = require('express');

const router = express.Router();

const projectController = require('../controller/project_controller')



router.get('/',projectController.project);

module.exports = router;
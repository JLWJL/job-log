'use strict';

const jobController = require('../controllers/jobController');
const express = require('express');
const router = express.Router();

router.route('/')
	.get(jobController.ListJobs)

router.route('/:app_id')
	.get(jobController.SingleJob)


module.exports=router;
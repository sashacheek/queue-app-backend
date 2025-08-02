const SessionPage = require('../models/SessionPage');
// controllers
const { createQueueAndUser, getQueuePage, createMember } = require('../controllers/queueController');


const { Router } = require("express");
const queueRouter = Router();


queueRouter.post('/', createQueueAndUser);
queueRouter.post('/createMember', createMember);
queueRouter.get('/:routeId', getQueuePage);

module.exports = queueRouter;
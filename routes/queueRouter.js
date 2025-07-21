const SessionPage = require('../models/SessionPage');
// controllers
const { createQueueAndUser, getQueuePage } = require('../controllers/queueController');


const { Router } = require("express");
const queueRouter = Router();


queueRouter.post('/', createQueueAndUser);
// queueRouter.post('/login', addMember);
queueRouter.get('/:routeId', getQueuePage);

module.exports = queueRouter;
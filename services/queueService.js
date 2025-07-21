const { nanoid } = require('nanoid');

const SessionPage = require('../models/SessionPage');



async function createQueue() {
    const queueId = nanoid(6);
    const queue = await SessionPage.create({ routeId: queueId });
    return queue;
}

// TODO: Add error handling
async function getQueue(routeId) {
    try {
    const page = await SessionPage.findOne({ routeId });

    if (!page) {
      return 'Queue not found';
    }
    return page;

  } catch (err) {
    console.error(err);
    return 'Error checking page';
  }
}


module.exports = { createQueue, getQueue };
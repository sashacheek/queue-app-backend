const { createQueue, getQueue } = require("../services/queueService");
const { createUser, getUsers } = require("../services/userService");

// make queue and owner user
async function createQueueAndUser(req, res) {
    const { username, password } = req.body;
    const queue = await createQueue();
    const user = await createUser(username, password, "owner", queue._id);

    res.json({ url: `/${queue.routeId}` });
}

// will return page and users associated with page
async function getQueuePage(req, res) {
  const { routeId } = req.params;
  const owners = await getUsers(routeId, "owner");
  res.json({ owners: owners });

};

module.exports = { createQueueAndUser, getQueuePage };
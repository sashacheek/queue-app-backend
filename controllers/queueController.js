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
  const members = await getUsers(routeId, "member");
  res.json({ owners: owners, members: members });

};

async function createMember(req, res) {
  const { username, password, queueId } = req.body;
  const queue = await getQueue(queueId);
  await createUser(username, password, "member", queue._id);
  res.json({ message: "Member creation successful"});
}

module.exports = { createQueueAndUser, getQueuePage, createMember };
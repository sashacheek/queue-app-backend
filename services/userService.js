const bcrypt = require("bcrypt")

const SessionUser = require('../models/SessionUser');

const { getQueue } = require("../services/queueService");


async function createUser(username, password, role, pageId) {
    const hashed = await bcrypt.hash(password, 10);

    const user = await SessionUser.create({
        username,
        password: hashed,
        role,
        pageId,
    });
    return user;
}

// TODO: add error handlilng to get function
async function getUsers(pageId, role) {
  page = await getQueue(pageId);

  const users = await SessionUser.find({
    pageId: page._id,
    role: role
  })
  .sort( {username: -1 })
  .select('username');

  return users;
}


module.exports = { createUser, getUsers };
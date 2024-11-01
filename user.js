let users = [];

function addUser(user) {
  users.push(user);
}

function getUser(id) {
  return users.find(user => user.id === id);
}

function countActiveUsers() {
  const sum = require('./math');
  const activeUsers = users.filter(user => user.active).length;
  return sum(activeUsers, 0); 
}


function resetUsers() {
  users = [];
}

module.exports = { addUser, getUser, countActiveUsers, resetUsers };

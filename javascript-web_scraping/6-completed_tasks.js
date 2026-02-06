#!/usr/bin/node

const request = require('request');

const url = process.argv[2];

request.get(url, (error, response, body) => {
  if (error) {
    process.stdout.write(error);
    return;
  }

  const todos = JSON.parse(body);
  const completedCount = {};

  todos.forEach(task => {
    if (task.completed) {
      const userId = task.userId;
      if (!completedCount[userId]) {
        completedCount[userId] = 1;
      } else {
        completedCount[userId]++;
      }
    }
  });

  process.stdout.write(completedCount);
});

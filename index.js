const express = require('express');
const app = express();

uniqueRoles = [
    'Producer',
    'Director',
    'Technical Director',
    'Camera Operator',
    'Sound Engineer',
    'Lighting Technician',
    'Graphics Operator',
    'Streaming Technician',
    'Floor Manager',
    'Teleprompter Operator',
    'IT Support',
    'Logistics Coordinator',
    'Talent/Host',
    'Makeup Artist and Hair Stylist',
    'Venue Coordinator',
    'Time Zone Manager'
]

const data = require('./RoleWiseCrewData.json');

app.get('/CrewBot', (req, res) => {
  const numEntries = parseInt(req.query.numEntries);
  const randomEntries = [];

  let roleEntries = {};
  for(let i = 0; i < numEntries; i++) {
    const randomRole = uniqueRoles[Math.floor(Math.random() * uniqueRoles.length)];
    const roleData = data[randomRole];
    const randomEntry = roleData[Math.floor(Math.random() * roleData.length)];
    if (!roleEntries[randomRole]) {
      roleEntries[randomRole] = [];
    }
    roleEntries[randomRole].push(randomEntry);
  }
  randomEntries = roleEntries;
  res.json(randomEntries);
});

app.get('/user', (req, res) => {
  const role = req.query.role;
  const userId = req.query.userId;

  if (!uniqueRoles.includes(role)) {
    res.status(400).json({ error: 'Invalid role' });
    return;
  }

  const roleData = data[role];
  console.log(roleData);
  if (!roleData) {
    res.status(404).json({ error: 'No data found for this role' });
    return;
  }

  const userData = roleData.find(user => user.userid === userId);
  if (!userData) {
    res.status(404).json({ error: 'No user found with this ID for the given role' });
    return;
  }

  res.json(userData);
});

module.exports = app;
const express = require('express');
const app = express();

uniqueRoles = ['Producer', 'Director', 'Technical Director', 'Camera Operator', 'Sound Engineer', 'Lighting Technician', 'Graphics Operator', 'Streaming Technician', 'Floor Manager', 'Teleprompter Operator', 'IT Support', 'Logistics Coordinator', 'Talent/Host', 'Makeup Artist and Hair Stylist', 'Venue Coordinator', 'Time Zone Manager'];

const data = require('./RoleWiseCrewData.json');

app.get('/CrewBot', (req, res) => {
  const numEntries = parseInt(req.query.numEntries);
  const randomEntries = [];

  for (let role of uniqueRoles) {
    let RoleEntries = []
    const roleData = data[role];
    for(let i = 0; i < numEntries; i++) {
      const TempEntry = roleData[Math.floor(Math.random() * roleData.length)];
      RoleEntry = {
        name: TempEntry.name,
        yoe: TempEntry.yoe,
        minRatePerDay: TempEntry.minRatePerDay,
        maxRatePerDay: TempEntry.maxRatePerDay,
        location: TempEntry.location,
        preferred_because : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, in pretium orci vestibulum eget."
      }
      RoleEntries.push(RoleEntry);
    }
    randomEntries.push({[role]:RoleEntries});
  }
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

// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
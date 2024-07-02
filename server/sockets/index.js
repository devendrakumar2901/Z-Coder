const express = require('express');
const mongoose = require('mongoose');
const http = require('http');
const { initializeSocket } = require('./sockets');

const app = express();
const server = http.createServer(app);

const profileRoutes = require('./routes/profile');
const solutionRoutes = require('./routes/solutions');
const eventRoutes = require('./routes/events');

app.use(express.json());

app.use('/api/profile', profileRoutes);
app.use('/api/solutions', solutionRoutes);
app.use('/api/events', eventRoutes);

const PORT = process.env.PORT || 3000;
const MONGO_URI = 'your_mongodb_uri';

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected');
    server.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
      initializeSocket(server);
    });
  })
  .catch(err => console.log(err));

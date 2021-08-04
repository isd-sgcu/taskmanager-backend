const express = require('express');
const project = require('./routes/project');

const PORT = 5000;

const app = express();

app.listen(PORT, () => console.log('App is listening on port 5000'));

app.use('/api/projects', project);

app.get('/', (req, res) => {
  res.send('Hey');
});

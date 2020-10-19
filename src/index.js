const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 5500;
const app = express();

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('chats/:id', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
})

app.listen(PORT, () => console.log('App listening on port:' + PORT))

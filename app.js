const express = require('express');

const app = express();

// Add middleware
app.use(express.json());

// Link routers
app.use('/auth', require('./routes/auth'));
app.use('/private', require('./routes/private'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}.`);
});

// Create web server

// Imports
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

// Create web server
const app = express();

// Middlewares
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

// Routes
app.get('/posts/:id/comments', (req, res) => {
    res.send([
        {
            id: 1,
            content: 'Comment 1',
            postId: req.params.id
        },
        {
            id: 2,
            content: 'Comment 2',
            postId: req.params.id
        },
        {
            id: 3,
            content: 'Comment 3',
            postId: req.params.id
        }
    ]);
});

// Start web server
app.listen(4001, () => {
    console.log('Comments service listening on port 4001');
});

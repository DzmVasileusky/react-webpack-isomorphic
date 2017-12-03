import express from 'express';
import React from 'react';
import ReactDom from 'react-dom/server';
import App from './app/components/App.jsx';

const app = express();

app.use((req, res) => {
    console.log(req);

    return res.end(renderHTML(componentHTML));
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server listening on: ${PORT}`);
});
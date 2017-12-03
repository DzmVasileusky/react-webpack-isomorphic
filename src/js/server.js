import express from 'express';
import React from 'react';
import ReactDom from 'react-dom/server';
import App from './app/components/App.jsx';

const app = express();

app.set('view engine', 'pug');

app.use((req, res) => {
    const appComponentHTML = ReactDom.renderToString(<App />);

    return res.render('index', { appComponentHTML: appComponentHTML });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server listening on: ${PORT}`);
});
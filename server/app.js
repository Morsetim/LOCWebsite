import express from 'express';

const app = express();

const port = parseInt(process.env.port || 8000);






app.listen(port, () => { console.log('Application listening at ' + port) });
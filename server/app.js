import express from 'express';
import bodyParser from 'body-parser';
import workersRouters from './routes/workersRoutes';


const app = express();

const port = parseInt(process.env.port) || 1000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api/v1', workersRouters);




app.listen(port, () => {
  console.log('Application listening at port ' + port)
});




export default app;
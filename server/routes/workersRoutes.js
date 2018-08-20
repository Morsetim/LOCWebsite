import express from 'express';
import workersRouter from './../controllers/workersDatabseController';

const routes = express.Router();

routes.route('/workers')
  .post(workersRouter.addWorker)
  .get(workersRouter.getAllworkers)

routes.route('/workers/:workerId')
  .get(workersRouter.getOneWorker)
  .put(workersRouter.updateWorker)




export default routes;
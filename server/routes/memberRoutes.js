import express from 'express';
import memberRouters from './../controllers/membersDatabaseController';

const routes = express.Router();

routes.route('/workers')
  .post(memberRouters.addMember)
  .get(memberRouters.getAllMember)

routes.route('/workers/:workerId')
  .get(memberRouters.getOneMember)
  .put(memberRouters.updateMember)




export default routes;
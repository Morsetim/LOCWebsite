import workersDatabase from './../models/workersDataBase';

export default class locWorkers {
  static addWorker(req, res) {
    const newId = workersDatabase[workersDatabase.length - 1].id + 1;

    const { fullName, department, DOB } = req.body;

    workersDatabase.push({
      id: newId,
      fullName,
      department,
      DOB
    });

    return res.status(200)
      .json({
        status: 'Success',
        message: 'A new worker has been added to the list of workers',
        workersDatabase
      })
  }

  static updateWorker(req, res) {
    const workerId = parseInt(req.params.workerId);
    const { fullName, department, DOB } = req.body;
    for (let i = 0; i < workersDatabase.length; i++) {
      if (workersDatabase.id === workerId) {
        workersDatabase[i].fullName = fullName || workersDatabase.fullName
        workersDatabase[i].department = department || workersDatabase.department
        workersDatabase[i].DOB = DOB || workersDatabase.DOB

        res.status(200)
          .json({
            status: 'Success',
            message: 'Worker has been currently updated',
            workersDatabase
          });
      }
    }

    res.status(401)
      .json({
        status: 'Failed',
        message: `Worker with id ${workerId} does not exist in your catalogue`
      });
  }

  static getAllworkers(req, res) {
    if (workersDatabase.length != 0) {
      return res.status(200).json({ status: 'success', message: 'Database for all LOC workers', workersDatabase })
    }
    res.status(401).json({ status: 'Failed', message: 'No Worker in my database' });
  }
  static getOneWorker(req, res) {
    for (let i = 0; i < workersDatabase.length; i++) {
      if (workersDatabase[i].id === parseInt(req.params.workerId)) {
        res.status(201).json({ status: 'success', message: `worker with id ${req.params.workerId} Info`, worker: workersDatabase[i] })
      }
    }
    res.status(401).json({ status: 'success', message: `worker with id ${workerId} Info does not exist` })
  }
  static deleteWorker(req, res) {
    for (let i = 0; i < workersDatabase.length; i++) {
      if (workersDatabase[i].id === parseInt(req.params.workerId)) {
        workersDatabase.splice(i, 1);

        res.status(200).json({ status: 'Success', message: 'Worker has been successfully deleted' })
      }
    }
    res.status(401).json({ status: 'Failed', message: `worker with id ${workerId} does not exist` })
  }
}
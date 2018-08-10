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

    res.status(200)
      .json({
        status: 'Success',
        message: 'A new worker has been added to the list of workers',
        workersDatabase
      })
  }

}
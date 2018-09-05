import memberDatabase from './../models/membersDatabase';

export default class locMember {
  static addMember(req, res) {
    const newId = memberDatabase[memberDatabase.length - 1].id + 1;

    const { fullName, department, DOB } = req.body;

    memberDatabase.push({
      id: newId,
      fullName,
      department,
      DOB
    });

    return res.status(200)
      .json({
        status: 'Success',
        message: 'A new worker has been added to the list of workers',
        memberDatabase
      })
  }

  static updateMember(req, res) {
    const workerId = parseInt(req.params.workerId);
    const { fullName, department, DOB } = req.body;
    for (let i = 0; i < memberDatabase.length; i++) {
      if (memberDatabase.id === workerId) {
        memberDatabase[i].fullName = fullName || memberDatabase.fullName
        memberDatabase[i].department = department || memberDatabase.department
        memberDatabase[i].DOB = DOB || memberDatabase.DOB

        res.status(200)
          .json({
            status: 'Success',
            message: 'Worker has been currently updated',
            memberDatabase
          });
      }
    }

    res.status(401)
      .json({
        status: 'Failed',
        message: `Worker with id ${workerId} does not exist in your catalogue`
      });
  }

  static getAllMember(req, res) {
    if (memberDatabase.length != 0) {
      return res.status(200).json({ status: 'success', message: 'Database for all LOC workers', memberDatabase })
    }
    res.status(401).json({ status: 'Failed', message: 'No Worker in my database' });
  }
  static getOneMember(req, res) {
    for (let i = 0; i < memberDatabase.length; i++) {
      if (memberDatabase[i].id === parseInt(req.params.workerId)) {
        res.status(201).json({ status: 'success', message: `worker with id ${req.params.workerId} Info`, worker: memberDatabase[i] })
      }
    }
    res.status(401).json({ status: 'success', message: `worker with id ${workerId} Info does not exist` })
  }
  static deleteMember(req, res) {
    for (let i = 0; i < memberDatabase.length; i++) {
      if (memberDatabase[i].id === parseInt(req.params.workerId)) {
        memberDatabase.splice(i, 1);

        res.status(200).json({ status: 'Success', message: 'Worker has been successfully deleted' })
      }
    }
    res.status(401).json({ status: 'Failed', message: `worker with id ${workerId} does not exist` })
  }
}
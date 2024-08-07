const userExport = require('../models/user');
const { v4 : uuidv4 } = require('uuid');
const User = userExport.userModel

exports.login = async (req, res) => {
    const email = req.body.email;
    const user = await User.findOne({email});

    if (!user) {
        const id = uuidv4();
        const newUser = await User.create({id, email});
        return res.status(200).send({ status: 0, data: newUser});
    }
    else {
        return res.status(200).send({status: 0, data: user})
    }
}

exports.update = async (req, res) => {
    const _id = req.body._id
    const user = await User.findOneAndUpdate({ _id }, req.body, { new: true })
    return res.status(201).send({status: 0, data: user})
}

exports.getData = async (req, res) => {
    const id = req.params.id;
    const user = await User.findOne({ id })
    return res.status(200).send({status: 0, data: user})
}

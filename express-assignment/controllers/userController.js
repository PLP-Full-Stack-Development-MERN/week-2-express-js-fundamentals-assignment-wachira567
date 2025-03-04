let users = []; // In-memory user storage

exports.getAllUsers = (req, res) => {
    res.json(users);
};

exports.getUserById = (req, res) => {

    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).send('User  not found');
    res.json(user);
};

exports.createUser  = (req, res) => {
    const user = { id: users.length + 1, name: req.body.name };
    users.push(user);
    res.status(201).json(user);
};

exports.updateUser  = (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).send('User  not found');
    user.name = req.body.name;
    res.json(user);
};

exports.deleteUser  = (req, res) => {
    const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
    if (userIndex === -1) return res.status(404).send('User not found');


    users.splice(userIndex, 1);
    res.status(204).send();
};

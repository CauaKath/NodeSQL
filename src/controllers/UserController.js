const User = require('../models/User');

module.exports = {
  async store(req, res) {
    const { name, email } = req.body;

    const user = await User.create({ name, email });

    return res.json(user);
  },

  async index(req, res) {
    const users = await User.findAll({ 
      attributes: ['name', 'email']
    });

    return res.json(users);
  },

  async indexOne(req, res) {
    const { user_id } = req.params;

    const user = await User.findByPk(user_id, {
      attributes: ['name', 'email']
    });

    if (!user) {
      return res.status(400).json({ error: 'User not found' });
    }

    return res.json(user);
  },

  async update(req, res) {
    const { user_id } = req.params;
    const { name, email } = req.body;

    let user = await User.findByPk(user_id);

    if (!user) {
      return res.status(400).json({ error: 'User not found' });
    }

    await User.update({ name, email }, {
      where: {
        id: user_id
      }
    });

    user = await User.findByPk(user_id);

    return res.json(user); 
  },

  async delete(req, res) {
    const { user_id } = req.params;

    const user = await User.findByPk(user_id);

    if (!user) {
      return res.status(400).json({ error: 'User not found' });
    }

    await User.destroy({
      where: {
        id: user_id
      }
    });

    return res.json();
  }
}
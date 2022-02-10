const User = require('../models/User');
const Address = require('../models/Address');

module.exports = {
  async store(req, res) {
    const { user_id } = req.params;
    const { zipcode, street, number } = req.body;

    const user = await User.findByPk(user_id);

    if (!user) {
      return res.status(400).json({ error: 'User not found' });
    }

    const address = await Address.create({
      zipcode,
      street,
      number,
      user_id,
    });

    return res.json(address);
  },
  
  async index(req, res) {
    const { user_id } = req.params;

    const user = await User.findByPk(user_id, {
      include: { association: 'addresses', attributes: [
        'zipcode', 'street', 'number'
      ]}
    });

    if (!user) {
      return res.status(400).json({ error: 'User not found' });
    }

    return res.json(user.addresses);
  },

  async update(req, res) { 
    const { user_id } = req.params;
    const { zipcode, street, number } = req.body;

    const user = await User.findByPk(user_id);

    if (!user) {
      return res.status(400).json({ error: 'User not found' });
    }

    const address = await Address.findOne({
      where: {
        zipcode
      }
    });

    if (!address) {
      return res.status(400).json({ error: 'Address not found' });
    }

    await Address.update({ zipcode, street, number }, {
      where: {
        user_id
      }
    });

    return res.json({ zipcode, street, number });
  },

  async delete(req, res) {
    const { user_id } = req.params;
    const { zipcode } = req.body;

    const user = await User.findByPk(user_id);

    if (!user) {
      return res.status(400).json({ error: 'User not found' });
    }

    const address = await Address.findOne({
      where: {
        zipcode
      }
    });

    if (!address) {
      return res.status(400).json({ error: 'Address not found' });
    }

    await Address.destroy({
      where: {
        zipcode
      }
    });

    return res.json();
  }
}
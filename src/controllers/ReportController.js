const { Op } = require('sequelize');
const User = require('../models/User');

module.exports = {
  async show(req, res) {
    const users = await User.findAll({
      attributes: ['name', 'email'],
      where: {
        email: {
          [Op.like] : '%@gmail.com'
        },
      },
      include: [
        { 
          association: 'addresses',
          attributes: ['zipcode', 'street', 'number'],
          where: {
            street: 'Rua Amanda Olavo' 
          },
        },
        { 
          association: 'techs',
          required: false,
          attributes: ['name'],
          through: {
            attributes: []
          },
          where: {
            name: {
              [Op.like]: 'Java%'
            },
          },
        },
      ],
    });

    return res.json(users);
  }
}
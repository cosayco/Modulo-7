'use strict';
module.exports = (sequelize, DataTypes) => {
  const bootcamp = sequelize.define(
    "bootcamp",
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cue: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: 5,
          max: 20, //Se cambia el max para que pasen los datos indicados
        },
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {}
  );

  bootcamp.associate = function (models) {
    bootcamp.belongsToMany(models.user, {
      through: "user_bootcamp", 
      foreignKey: "bootcamp_id", 
      otherKey: "user_id", 
    });
  };

  return bootcamp;
};


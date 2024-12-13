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
          max: 20,
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
    // Relación muchos a muchos con Receta
    bootcamp.belongsToMany(models.user, {
      through: "user_bootcamp", // Nombre de la tabla intermedia
      foreignKey: "bootcamp_id", // Clave foránea en la tabla intermedia
      otherKey: "user_id", // Otra clave foránea
    });
  };

  return bootcamp;
};


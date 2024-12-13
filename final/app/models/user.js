"use strict";
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define("user", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
  });

  user.associate = function (models) {
    // Relación muchos a muchos con Receta
    user.belongsToMany(models.bootcamp, {
      through: "user_bootcamp", // Nombre de la tabla intermedia
      foreignKey: "user_id",
      otherKey: "bootcamp_id",
    });
  };

  return user;
};

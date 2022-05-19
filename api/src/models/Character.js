const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("character", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      validate: {
        notNull: { msg: "Cannot be null" },
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: /^([a-zA-Z -_]+)$/,
        notNull: { msg: "Cannot be null" },
        notEmpty: true,
      },
    },
    status: {
      type: DataTypes.STRING,
      validate: {
        is: /^([a-zA-Z0-9 ]+)$/,
      },
    },
    species: {
      type: DataTypes.STRING,
      validate: {
        is: /^([a-zA-Z0-9 ]+)$/,
      },
    },
    gender: {
      type: DataTypes.STRING,
      validate: {
        is: /^([a-zA-Z0-9 ]+)$/,
      },
    },
    origin: {
      type: DataTypes.STRING,
      validate: {
        is: /^([a-zA-Z0-9 ]+)$/,
      },
    },
    location: {
      type: DataTypes.STRING,
      validate: {
        is: /^([a-zA-Z0-9 ]+)$/,
      },
    },
    image: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true,
      },
    },
    created: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  });
};

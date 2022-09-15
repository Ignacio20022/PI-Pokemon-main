const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id: {
        // type: DataTypes.UUID,
        // defaultValue: DataTypes.UUIDV4,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notIn: [[""]]
        }
    },
    hp: {
        type: DataTypes.INTEGER
    },
    attk: {
        type: DataTypes.INTEGER
    },
    def: {
        type: DataTypes.INTEGER
    },
    speed: {
        type: DataTypes.INTEGER
    },
    height: {
        type: DataTypes.INTEGER
    },
    weight: {
        type: DataTypes.INTEGER
    },
    img : {
        type: DataTypes.STRING,
        defaultValue: "https://i.ytimg.com/vi/_jHaJ2sRlmo/maxresdefault.jpg"
    }
  });
};

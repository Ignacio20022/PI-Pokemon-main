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
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    attk: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    def: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    speed: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    height: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    weight: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    img : {
        type: DataTypes.STRING,
        set(value){
            if(value === '') this.setDataValue('img', "https://i.ytimg.com/vi/_jHaJ2sRlmo/maxresdefault.jpg")
            else this.setDataValue('img', value)
        }
    }
  },{
    timestamps: false
  });
};
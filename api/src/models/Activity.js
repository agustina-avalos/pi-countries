const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('activity', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    difficulty:{
      type:DataTypes.INTEGER,
      allowNull:true,
    },
    time:{
      type:DataTypes.INTEGER,
      allowNull:true,
    },
    season:{
      type:DataTypes.STRING,
      allowNull:true,
    }
  });
};

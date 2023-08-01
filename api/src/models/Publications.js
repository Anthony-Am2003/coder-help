const {DataTypes} = require("sequelize");

module.exports = (sequelize)=>{
    sequelize.define("Publications", {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
          },
        title: {
            type: DataTypes.STRING,
            allowNull:false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull:false,
        },
        media:{
            type: DataTypes.STRING,
            allowNull: false,
        }

    }, { timestamps: true })
}
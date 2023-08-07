const {DataTypes} = require("sequelize");


module.exports = (sequelize) => {
    sequelize.define("User", {
        id:{
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
        },
        firstName:{
            type: DataTypes.STRING,
            allowNull:false,
        },
        lastName:{
            type: DataTypes.STRING,
            allowNull:false,
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        password:{
            type: DataTypes.STRING,
            allowNull:false,
        },
        isActive:{
            type:DataTypes.BOOLEAN,
            allowNull:false,
            defaultValue: false,
        },
        code:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        role:{
            type: DataTypes.STRING,
            allowNull:false ,
        }

    }, {timestamps: true});
};
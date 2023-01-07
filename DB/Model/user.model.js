const { DataTypes } = require('sequelize');

// We export a function that defines the model.
// This function will automatically receive as parameter the Sequelize connection object.
module.exports = (sequelize) => {
	sequelize.define('user', {
		// The following specification of the 'id' attribute could be omitted
		// since it is the default.
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
		},
		username: {
			allowNull: false,
			type: DataTypes.STRING,
			unique: true,
			validate: {
				// We require usernames to have length of at least 3, and
				// only use letters, numbers and underscores.
				is: /^\w{3,}$/
			}
		},
        password:{
            allowNull:false,
            type:DataTypes.STRING,
        },
        name:{
            allowNull:false,
            type:DataTypes.STRING,
        },
        lastName:{
            allowNull:false,
            type:DataTypes.STRING,
        },
        email:{
            allowNull:false,
            type:DataTypes.STRING,
        },       
        verifyEmail:{
            allowNull:false,
            type:DataTypes.BOOLEAN,
        },
        phone:{
            allowNull:false,
            type:DataTypes.STRING,
        },       
        verifyPhone:{
            allowNull:false,
            type:DataTypes.BOOLEAN,
        },
        createDateTime:{
            allowNull:false,
            type:DataTypes.DATE,
        },       
        lastLoginDateTime:{
            allowNull:false,
            type:DataTypes.DATE,
        },
        role:{
            type:DataTypes.BOOLEAN
        }
	});
};
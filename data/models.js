const {Sequelize , DataTypes} = require('sequelize');
// Importing Sequelize for creating DB and tables


// Create instance of sequalize
const sequelize = new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: '0000',
    database: 'nodelibrary'
});

// Define user model
const Users = sequelize.define('Users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    fname: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    lname: {
            type: DataTypes.STRING(50),
            allowNull: true
        },

    email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    },

phone: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true
        },
 address: {
                type: DataTypes.STRING(100),
                allowNull: false,
                unique: false
         },
otp:{
    type: DataTypes.INTEGER,
    allowNull:false,

},

status:{
    type:DataTypes.STRING,
    allowNull:false
},

    password: {
        type: DataTypes.STRING(20),
        allowNull: false
    },

    role: {
        type: DataTypes.STRING(10),
        allowNull: false,
        defaultValue: 'user'
    }

});


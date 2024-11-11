require('dotenv').config()

module.exports ={
    "development":{
        "username": process.env.MYSQL_USER,
        "password": process.env.MYSQL_PASSWORD,
        "database": process.env.MYSQL_DB,
        "host": process.env.MYSQL_HOST,
        "dialect": "mysql",
        port: 3306
    

    },

    "test": {
        "username": process.env.MYSQL_USER,
        "password": process.env.MYSQL_PASSWORD,
        "database": process.env.MYSQL_DB,
        "host": process.env.MYSQL_HOST,
        "dialect": "mysql",
        port: 3306
    },

    "production":{
        "username": process.env.MYSQL_USER,
        "password": process.env.MYSQL_PASSWORD,
        "database": process.env.MYSQL_DB,
        "host": process.env.MYSQL_HOST,
        "dialect": "mysql",
        port: 3306
    }
}
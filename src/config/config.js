const data = {
    "development": {
        "username": "postgres",
<<<<<<< HEAD
        "password": "PgAdmin123.",
        "database": "Nahual-Cursos-Fixed",
=======
        "password": "pass123",
        "database": "nahual",
>>>>>>> 3f8833f7657441ed4047ca6a2aae8c68ab417ff1
        "host": "127.0.0.1",
        "dialect": "postgres",
        "define": {
            "schema": "public",
            "timestamps": false
        }
    },
    "test": {
        "username": null,
        "password": null,
        "database": null,
        "host": null,
        "dialect": null,
        "define": {
            "schema": "public",
            "timestamps": false
        }
    },
    "production": {
        "username": process.env.USERNAME,
        "password": process.env.PASSWORD,
        "database": process.env.DATABASE,
        "host": process.env.HOST,
        "dialect": "postgres",
        "NODE_ENV": "production",
        "define": {
            "schema": "public",
            "timestamps": false
        },        
        "dialectOptions": {
            "ssl": {
                "rejectUnauthorized": false
            }
        }, 
        "DATABASE_URL": process.env.DATABASE_URL

    }
};


module.exports = data;
const data = {
    "development": {
        "username": "postgres",
        "password": "PgAdmin123.",
        "database": "Nahual-Cursos-Fixed",
        "host": "127.0.0.1",
        "dialect": "postgres",
        "port": 2000,
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
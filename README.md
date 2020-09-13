## 🔌 Configurations

It is needed to create the database *nahual* in your pgAdmin server.

## 💿 Install Dependencies

From your CLI inside the folder Nahual-ServicioDatos run the following command:

npm install

*Make sure you have modified the database configurations inside config/config.json*

To run migrations use the following command inside the folder Nahual-ServicioDatos:

npx sequelize-cli db:migrate

To run the seeds use the following command:

npx sequelize-cli db:seed:all

## 💻 Run Project

To run project use the following command inside the folder Nahual-ServicioDatos:

npm run start --env=<Environment>

To run in a development enviroment use the following command:

npm run dev --dev=<enviroment>


Possible environments:

* development
* test
* production
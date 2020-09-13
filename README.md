## 🔌 Configurations

It is needed to create the database **nahual** in your pgAdmin server.

## 💿 Install Dependencies

From your CLI inside the folder Nahual-ServicioDatos run the following command:

npm install

**Make sure you have modified the database configurations inside config/config.json**

To run migrations use the following command inside the folder Nahual-ServicioDatos **only use this command once when the schema is not set**:

npx sequelize-cli db:migrate

To run the seeds use the following command **it is only needed in a local/development environment, avoid to use it in production** :

npx sequelize-cli db:seed:all

## 💻 Run Project

To run project use the following command inside the folder Nahual-ServicioDatos:

npm run start --env=<environment>

To run in a development enviroment use the following command:

npm run dev --env=<enviroment>


Possible environments:

* development
* test
* production
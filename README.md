# REFERENCES

- sequelize
    > https://www.npmjs.com/package/sequelize-cli <br>
    > https://sequelize.org/master/manual/getting-started.html <br>

- postgres ORM
    > https://blog.echobind.com/a-guide-for-restful-apis-with-node-sequelize-postgres-63636d026d5d <br>

- Step
    > yarn add dotenv <br>
    > setup package.json "dev": "nodemon -r dotenv/config app.js" <br>
    > create .env file <br>
    > yarn add pg pg-hstore, sequelize, sequelize-cli <br>
    > yarn sequelize-cli init (sequelize project bootstrapping) <br>
    > rename config/config.json to config/config.js <br>
    > add require('dotenv).config() to config.js <br>
    > add const { DB_HOST, DB_USERNAME, DB_PASSWORD } = process.env to config.js <br>
    > replace username, password, host, and rename database <br>
    > set module.exports <br>
    > create new db <br>
        > add "db:create": "sequelize-cli db:create" to package.json <br>
    > create model & migration <br>
        > ex cli: yarn sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string <br>
    > run migration <br>
        > add "db:migrate": "sequelize-cli db:migrate", <br>
        > add "db:g:migration": "sequelize-cli migration:generate --name" <br>
        > to package.json <br>
        > yarn db:migrate to run migration <br>
    > create seed <br>
        > add "db:g:seed": "sequelize-cli seed:generate --name" <br>
        > add "db:seeds": "sequelize-cli db:seed:all" <br>
        > to package.json <br>
        > yarn db:g:seed sample-user to create seeder <br>
        > yarn db:seeds to run seeds <br>
    > update model <br>
        > yarn db:g:migration addPassword <br>
        > change up() createTable to addColumn <br>
        > change down() dropTable to removeColumn <br>
        > yarn db:migrate to update <br>
        > update user.js model add password column <br>
# REFERENCES

- sequelize
    > https://www.npmjs.com/package/sequelize-cli <br>
    > https://sequelize.org/master/manual/getting-started.html <br>

- postgres ORM
    > https://blog.echobind.com/a-guide-for-restful-apis-with-node-sequelize-postgres-63636d026d5d <br>

- simple step ORM
    > yarn add dotenv
    > setup package.json "dev": "nodemon -r dotenv/config app.js"
    > create .env file
    > yarn add pg pg-hstore, sequelize, sequelize-cli
    > yarn sequelize-cli init (sequelize project bootstrapping)
    > rename config/config.json to config/config.js
    > add require('dotenv).config() to config.js
    > add const { DB_HOST, DB_USERNAME, DB_PASSWORD } = process.env to config.js
    > replace username, password, host, and rename database
    > set module.exports
    > create new db
        > add "db:create": "sequelize-cli db:create" to package.json
    > create model & migration
        > ex cli: yarn sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string
    > run migration
        > add "db:migrate": "sequelize-cli db:migrate",
        > add "db:g:migration": "sequelize-cli migration:generate --name"
        > to package.json
        > yarn db:migrate to run migration
    > create seed
        > add "db:g:seed": "sequelize-cli seed:generate --name"
        > add "db:seeds": "sequelize-cli db:seed:all"
        > to package.json
        > yarn db:g:seed sample-user to create seeder
        > yarn db:seeds to run seeds
    > update model
        > yarn db:g:migration addPassword
        > change up() createTable to addColumn
        > change down() dropTable to removeColumn
        > yarn db:migrate to update
        > update user.js model add password column
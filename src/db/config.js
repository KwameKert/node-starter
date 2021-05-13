module.exports = {
    test: {
        username: null,
        password: null,
        database: 'test',
        host: 'localhost',
        dialect: 'postgres',
        seederStorage: 'json'
    },
    development: {
        username: 'postgres',
        password: 'kwamepass',
        database: 'test-ci-messenger',
        host: 'localhost',
        dialect: 'postgres',
        seederStorage: 'json'
    },
    production: {
        username: null,
        password: null,
        database: 'test',
        host: 'localhost',
        dialect: 'postgres',
        seederStorage: 'json'
    }

}
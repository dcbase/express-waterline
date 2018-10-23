/*
var mysqlAdapter = require('sails-mysql');

var wlconfig = {
    adapters: {
        'default':mysqlAdapter,
        mysql: mysqlAdapter
    },

    connections: {
        myLocalMysql: { //对应models中的connection
            adapter : 'mysql',
            host : 'localhost',
            port : 3306,
            user : 'root',
            password : 'root',
            database : 'spt'
        }
    },

    defaults: {
        migrate: 'safe' //这个注意啊，如果是争对已经有的数据库一定要注意，小心把表全删除了
    }
};

exports.config = wlconfig;
*/
var Waterline = require('waterline');

// Instantiate a new instance of the ORM
var orm = new Waterline();

/////////////////////////////////////////////////////
// WATERLINE CONFIG
/////////////////////////////////////////////////////

// Require any waterline compatible adapters here
var diskAdapter = require('sails-disk'),
    mysqlAdapter = require('sails-mysql');

// Build A Config Object
var wlconfig = {
    // Setup Adapters
    // Creates named adapters that have been required
    adapters: {
        'default': mysqlAdapter,
        disk: diskAdapter,
        mysql: mysqlAdapter
    },

    // Build Connections Config
    // Setup connections using the named adapter configs
    connections: {
        myLocalDisk: {
            adapter: 'disk'
        },

        myLocalMySql: {
            adapter: 'mysql',
            host: 'localhost',
            port: 3306,
            user: 'root',
            password: 'root',
            database: 'spt'
        }
    }
};

///////////////////////////////////////////////////
// WATERLINE MODELS
///////////////////////////////////////////////////

var bear = require('../models/bear');

// Load the Models into the ORM
orm.loadCollection(bear);


exports.orm = orm;
exports.config = wlconfig;
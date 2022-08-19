import {logger} from '../common/utils';
import {Sequelize} from "sequelize";


const instance = Symbol('sequelize#instance');

export default class SequelizeFactory {
    constructor(database, username, password, options) {
        this.database = database;
        this.username = username;
        this.password = password;
        this.options = options;
    }

    /**
     * 创建sequelize连接单例
     */
    getSingleInstance() {
        const {
            database, username, password, options
        } = this;
        try {
            if (this[instance] == null) {
                this[instance] = new Sequelize(database, username, password, options);
            }
            logger.info('database connected , sync table model successfully');
        } catch (err) {
            console.log(err);
            logger.error(err);
        }
        return this[instance];
    }

    /**
     * 创建数据库
     * @param sequelizeConn
     */
    databaseInit(sequelizeConn) {
        const {database} = this;
        const creatDataBaseSql = `CREATE DATABASE IF NOT EXISTS ${database} `
            + 'default charset utf8 COLLATE utf8_general_ci';
        sequelizeConn.query(creatDataBaseSql);
    }
}

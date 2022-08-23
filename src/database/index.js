import SequelizeFactory from './sequelize.factory';
import globalConfig from '../global-config';
import UserEntity from './user.entity';

const {
  username, password, database, options
} = globalConfig.sequelize;
/**
 * 初始化sequelize实例
 */
const sequelizeInstance = new SequelizeFactory(
  database,
  username,
  password,
  options
).getSingleInstance();

export default {
  sequelizeInstance,
  userEntityRepo: UserEntity(sequelizeInstance)
};

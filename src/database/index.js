import SequelizeFactory from './sequelize.factory';
import UserEntity from './user.entity';
import globalConfig from '../../global-config';

const {
  username, password, database, options
} = globalConfig.sequelize;
const sequelizeInstance = new SequelizeFactory(
  username,
  password,
  database,
  options
).getSingleInstance();

export default {
  userEntityRepo: UserEntity(sequelizeInstance)
};

import { Sequelize } from 'sequelize';
import config from './config.js';

const sequelize = new Sequelize(config, {
  host: host,
  dialect: dialect,
  logging: false,
});

export default sequelize;

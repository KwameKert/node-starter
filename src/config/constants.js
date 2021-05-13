import { version } from '../../package.json';
import dbOpts from '../db/config';


const defaultConfig = {
  v: `${version}-${process.env.NODE_ENV}`,
  ENV: process.env.NODE_ENV,
};

const devConfig = {
  DB_NAME: dbOpts.development.database,
  DB_USER: dbOpts.development.username,
  DB_PASS: dbOpts.development.password,
  DB_HOSTNAME: dbOpts.development.host,
  PORT: process.env.PORT || 3000,
  ...defaultConfig
}


const testConfig = {
  DB_NAME: dbOpts.test.database,
  DB_USER: dbOpts.test.username,
  DB_PASS: dbOpts.test.password,
  DB_HOSTNAME: dbOpts.test.host,
  PORT: process.env.PORT || 3000,
  ...defaultConfig
}


const prodConfig = {
  DB_NAME: dbOpts.production.database,
  DB_USER: dbOpts.production.username,
  DB_PASS: dbOpts.production.password,
  DB_HOSTNAME: dbOpts.production.host,
  PORT: process.env.PORT || 3000,
  ...defaultConfig
}

export function  envConfig (env = process.env.NODE_ENV){
  console.log("im here");
  switch(env){
    case 'development':
      return devConfig;
    case 'test':
      return testConfig;
    default:
      return prodConfig;  
  }
}

export const isProduction = () => process.env.NODE_ENV === 'production';
export const isTest = () => process.env.NODE_ENV === 'test';
export const isDev = () => process.env.NODE_ENV === 'dev';

export default {
  ...envConfig()
}

import dotenv from 'dotenv';

dotenv.config();

export const dbConfigurations = [
  {
    host: process.env.TRIAL_HOST,
    user: process.env.TRIAL_USER,
    database: process.env.TRIAL_DB,
    password: process.env.TRIAL_PASSWORD,
    port: process.env.DEFAULT_PORT,
  },
  {
    host: process.env.CCR_HOST,
    user: process.env.CCR_USER,
    database: process.env.CCR_DB,
    password: process.env.CCR_PASSWORD,
    port: process.env.DEFAULT_PORT,
  },
  {
    host: process.env.ACC_HOST,
    user: process.env.ACC_USER,
    database: process.env.ACC_DB,
    password: process.env.ACC_PASSWORD,
    port: process.env.DEFAULT_PORT,
  },
  {
    host: process.env.FERBASA_HOST,
    user: process.env.FERBASA_USER,
    database: process.env.FERBASA_DB,
    password: process.env.FERBASA_PASSWORD,
    port: process.env.DEFAULT_PORT,
  },
  {
    host: process.env.VOTORANTIM_HOST,
    user: process.env.VOTORANTIM_USER,
    database: process.env.VOTORANTIM_DB,
    password: process.env.VOTORANTIM_PASSWORD,
    port: process.env.DEFAULT_PORT,
  },
  {
    host: process.env.PARKER_HOST,
    user: process.env.PARKER_USER,
    database: process.env.PARKER_DB,
    password: process.env.PARKER_PASSWORD,
    port: process.env.DEFAULT_PORT,
  },
  {
    host: process.env.MERCURIO_HOST,
    user: process.env.MERCURIO_USER,
    database: process.env.MERCURIO_DB,
    password: process.env.MERCURIO_PASSWORD,
    port: process.env.DEFAULT_PORT,
  },
];

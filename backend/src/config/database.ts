import { Sequelize } from "sequelize";
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(
    process.env.DB_DATABASE as string,
    process.env.DB_USER as string,
    process.env.DB_PASSWORD as string,
  {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres',
    logging: false,
  }
);

sequelize.authenticate()
  .then(() => {
    console.log('🔥 Conexão com o banco de dados estabelecida com sucesso.');
  })
  .catch((err: any) => {
    console.error('❌ Erro ao conectar ao banco de dados:', err.message);
  });

export default sequelize;
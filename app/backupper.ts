import child_process from 'child_process';
import path from 'path';
import { dbConfigurations } from './dbConfigurations';

const doBackup = async (dbConfigurations: any) => {
    for (let dbIndex = 0; dbIndex < dbConfigurations.length; dbIndex++) {
        const config = dbConfigurations[dbIndex];
        const timestamp = new Date().toISOString().replace(/:/g, '-');
        
        let dbName = config.database;
        
        if (config.database === 'defaultdb') {
            dbName = 'accdb';
        }

        const backupFilename = `${dbName}_${timestamp}.bkp`;

        const outputFilePath = path.join(__dirname, `./files/${backupFilename}`)
      
        const command = `PGPASSWORD="${config.password}" pg_dump -U ${config.user} -h ${config.host} -p ${config.port} ${config.database} > ${outputFilePath}`;
      
        try {
          console.log(`Iniciando o backup do banco de dados ${dbName}...`);
          child_process.execSync(command, { stdio: 'inherit' });
          console.log(`Backup do banco de dados ${dbName} concluído com sucesso.`);
        } catch (error: any) {
          console.error(`Erro ao fazer backup do banco de dados ${dbName}: ${error.message}`);
        }
      }
};

// Agendamento do backup (executa toda sexta-feira às 09h30)
// cron.schedule('30 9 * * 5', () => {
//   for (const config of dbConfigurations) {
    doBackup(dbConfigurations);
//   }
// });
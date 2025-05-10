import express from 'express';
import sequelize from './config/database';
import dotenv from 'dotenv';
import cors from 'cors';
import userRoutes from './routes/userRoutes';
import playlistRoutes from './routes/playlistRoutes';
import musicRoutes from './routes/musicRoutes';
import deezerRoutes from './routes/deezerRoutes';

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/users', userRoutes);
app.use('/api/playlists', playlistRoutes);
app.use('/api/musics', musicRoutes);
app.use('/api/deezer', deezerRoutes);

sequelize.sync().then(() => {
    console.log('Conectado ao banco de dados.');
}).catch((err) => {
    console.error('Erro ao conectar no banco de dados:', err);
});

app.get('/', (req, res) => {
    res.send('API PurpleMusic funcionando!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

export default app;

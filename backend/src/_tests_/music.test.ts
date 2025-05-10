import request from 'supertest';
import app from '../index';

describe('Testes de Música', () => {
  it('Deve criar uma nova música', async () => {
    const res = await request(app).post('/api/musics').send({
      title: 'Nova Música',
      artist: 'Artista X',
      playlistId: 1,
    });

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('id');
  });

  it('Deve buscar todas as músicas', async () => {
    const res = await request(app).get('/api/musics');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});

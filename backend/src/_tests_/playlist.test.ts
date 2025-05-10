import request from 'supertest';
import app from '../index';

describe('Testes de Playlist', () => {
  it('Deve criar uma nova playlist', async () => {
    const res = await request(app).post('/api/playlists').send({
      name: 'Minha Playlist',
      userId: 2,
    });

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('id');
  });

  it('Deve buscar todas as playlists', async () => {
    const res = await request(app).get('/api/playlists');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});

import request from 'supertest';
import app from '../index';

describe('Testes de Usuário', () => {
  it('Deve criar um novo usuário', async () => {
    const res = await request(app).post('/api/users').send({
      name: 'Judite',
      email: 'ju@example.com',
      password: '123456',
    });

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('id');
  });

  it('Deve buscar todos os usuários', async () => {
    const res = await request(app).get('/api/users');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});

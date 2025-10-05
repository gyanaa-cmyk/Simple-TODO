import { expect, test } from 'vitest';
import request from 'supertest';
import express from 'express';

const app = express();
app.get('/api/health', (req, res) => {
  res.sendStatus(200);
});

test('GET /api/health should return 200', async () => {
  const response = await request(app).get('/api/health');
  expect(response.status).toBe(200);
});
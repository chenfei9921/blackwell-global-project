import { defineEventHandler, readBody, createError } from 'h3';
import bcrypt from 'bcryptjs';

const users = [
  { email: 'test@example.com', passwordHash: bcrypt.hashSync('123456', 10) }
];

export default defineEventHandler(async (event) => {
  if (event.method === 'GET') {
    return { message: 'Use POST method to login' };
  }

  if (event.method === 'POST') {
    const body = await readBody(event);
    const { email, password } = body;

    if (!email || !password) {
      throw createError({ statusCode: 400, statusMessage: 'Missing email or password' });
    }

    const user = users.find(u => u.email === email);
    if (!user) {
      throw createError({ statusCode: 401, statusMessage: 'User not found' });
    }

    const isValidPassword = await bcrypt.compare(password, user.passwordHash);
    if (!isValidPassword) {
      throw createError({ statusCode: 401, statusMessage: 'Invalid credentials' });
    }

    return { message: 'Login successful', user: { email } };
  }

  throw createError({ statusCode: 405, statusMessage: 'Method Not Allowed' });
});


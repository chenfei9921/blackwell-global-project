import { defineEventHandler, readBody, createError } from 'h3';

export default defineEventHandler(async (event) => {
  if (event.method !== 'POST') {
    return { message: 'Only POST requests allowed' };
  }

  const body = await readBody(event);
  const { firstName, lastName, email, password, country, phone } = body;

  if (!firstName || !lastName || !email || !password || !country || !phone) {
    throw createError({ statusCode: 400, statusMessage: 'All fields are required' });
  }

  const existingUser = false;

  if (existingUser) {
    throw createError({ statusCode: 400, statusMessage: 'User already exists' });
  }

  return { message: 'Registration successful', user: { firstName, lastName, email, country, phone } };
});

import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

const SECRET_KEY = process.env.JWT_SECRET || 'my_secret_key'

export function generateToken(user) {
  return jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, { expiresIn: '1h' })
}

export function verifyToken(token) {
  try {
    return jwt.verify(token, SECRET_KEY)
  } catch (error) {
    return null
  }
}

export function hashPassword(password) {
  return bcrypt.hashSync(password, 10)
}

export function comparePassword(password, hash) {
  return bcrypt.compareSync(password, hash)
}

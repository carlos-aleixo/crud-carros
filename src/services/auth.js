import jwt from 'jsonwebtoken';

export const login = (token) => {
  localStorage.setItem('token', token);
};

export const logout = () => {
  localStorage.removeItem('token');
};

export const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  if (!token) {
    return false;
  }

  try {
    const decoded = jwt.decode(token);
    return decoded && decoded.exp > Date.now() / 1000;
  } catch (e) {
    return false;
  }
};
import { Router } from 'express';

const routes = Router();

function verifyUserExists(req, res, next) {
  const { user } = req.headers;

  const admin = {
    email: 'studiocleofernandes@gmail.com',
    password: 'Cafe@2021',
  };

  if (user !== admin) {
    return res
      .status(400)
      .json({ error: 'Dados não correspondem a um usuário válido.' });
  }

  req.user = admin;

  return next();
}

routes.post('/admin', (req, res) => {
  const { email, password } = req.body;

  const user = { email, password };

  return res.json(user);
});

export default routes;

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const users = []; // Array temporário de usuários, substitua com um banco de dados em produção.

const login = (req, res) => {
  const { username, password } = req.body;

  // Procura o usuário (no caso, um array temporário)
  const user = users.find((user) => user.username === username);

  if (!user) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  // Compara a senha com a armazenada (senha criptografada)
  const isPasswordValid = bcrypt.compareSync(password, user.password);

  if (!isPasswordValid) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  // Gera um JWT para o usuário
  const token = jwt.sign(
    { userId: user.id, username: user.username },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRATION }
  );

  res.json({ token });
};

const register = (req, res) => {
  const { username, password } = req.body;

  // Verifica se o usuário já existe
  if (users.some((user) => user.username === username)) {
    return res.status(400).json({ message: 'User already exists' });
  }

  // Criptografa a senha
  const hashedPassword = bcrypt.hashSync(password, 10);

  // Cria o novo usuário
  const newUser = {
    id: users.length + 1,
    username,
    password: hashedPassword,
  };

  users.push(newUser);
  res.status(201).json({ message: 'User created successfully' });
};

module.exports = { login, register };

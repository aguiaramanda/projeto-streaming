import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User';
import asyncHandler from '../middleware/asyncHandler';

export class UserController {
  static createUser = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const { name, email, password } = req.body;
    const newUser = await User.create({ name, email, password });
    return res.status(201).json(newUser);
  });

  static getAllUsers = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const users = await User.findAll();
    return res.json(users);
  });

  static getUserById = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (!user) return res.status(404).json({ message: 'Usuário não encontrado' });
    return res.json(user);
  });

  static updateUser = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const { name, email, password } = req.body;
    const user = await User.findByPk(id);
    if (!user) return res.status(404).json({ message: 'Usuário não encontrado' });

    user.name = name;
    user.email = email;
    user.password = password;

    await user.save();
    return res.json(user);
  });

  static deleteUser = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (!user) return res.status(404).json({ message: 'Usuário não encontrado' });

    await user.destroy();
    return res.status(204).send();
  });

  static login = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;

    try {
      const user = await User.findOne({ where: { email } });
      if (!user) {
        return res.status(404).json({ message: 'Usuário não encontrado' });
      }
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Senha inválida' });
      }

      const token = jwt.sign(
        { userId: user.id, email: user.email },
        process.env.JWT_SECRET as string,
        { expiresIn: '1h' }
      );

      return res.status(200).json({
        message: 'Login realizado com sucesso',
        token,
      });
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      return res.status(500).json({ message: 'Erro interno no servidor' });
    }
  })
}

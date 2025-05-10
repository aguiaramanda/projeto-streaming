import { Request, Response, NextFunction } from 'express';
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
}

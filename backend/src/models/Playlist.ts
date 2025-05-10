import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';
import User from './User';

class Playlist extends Model {
  public id!: number;
  public name!: string;
  public description!: string;
  public userId!: number;
}

Playlist.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Playlist',
  }
);

User.hasMany(Playlist, { foreignKey: 'userId' });
Playlist.belongsTo(User, { foreignKey: 'userId' });

export default Playlist;

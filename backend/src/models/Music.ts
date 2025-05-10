import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';
import Playlist from './Playlist';

class Music extends Model {
  public id!: number;
  public title!: string;
  public artist!: string;
  public album!: string;
  public duration!: string;
  public playlistId!: number;
}

Music.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    artist: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    album: {
      type: DataTypes.STRING,
    },
    duration: {
      type: DataTypes.STRING,
    },
    playlistId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Music',
  }
);

Playlist.hasMany(Music, { foreignKey: 'playlistId' });
Music.belongsTo(Playlist, { foreignKey: 'playlistId' });

export default Music;

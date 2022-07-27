import {
  Column,
  Model,
  Table,
  BeforeCreate,
  BeforeUpdate,
} from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import { encryptPassword } from 'src/common/encryption.helper';

@Table({ tableName: 'users' })
export class User extends Model<User> {
  @Column({ type: DataTypes.STRING, allowNull: false })
  name: string;

  @Column({ type: DataTypes.STRING, allowNull: false, unique: true })
  username: string;

  @Column({ type: DataTypes.STRING, allowNull: false, unique: true })
  email: string;

  @Column({ type: DataTypes.STRING, allowNull: false })
  password: string;

  @Column({ type: DataTypes.STRING })
  profilePic: string;

  @BeforeCreate
  @BeforeUpdate
  static async hashPassword(user: User) {
    if (user.password) user.password = await encryptPassword(user.password);
  }
}

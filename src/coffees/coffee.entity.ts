import { Table, Column, Model } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';

@Table({ tableName: 'coffees' })
export class Coffee extends Model {
  @Column({ type: DataTypes.STRING, allowNull: false })
  name: string;

  @Column({ type: DataTypes.STRING, allowNull: false })
  brand: string;

  @Column({ type: DataTypes.STRING, allowNull: false })
  flavors: string;
}

import { Model, Column, Table } from 'sequelize-typescript';

@Table({ timestamps: true })
export class User extends Model {
  @Column
  name: string;

  // Add more columns as needed
}

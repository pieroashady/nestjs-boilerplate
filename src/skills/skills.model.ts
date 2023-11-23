import { Model, Column, Table } from 'sequelize-typescript';

@Table({ timestamps: true })
export class Skill extends Model {
  @Column
  name: string;

  // Add more columns as needed
}

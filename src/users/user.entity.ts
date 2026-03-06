import { BaseEntity } from "src/common/entities/base.entity";
import { Column, Entity } from "typeorm";

export enum UserRole {
  DEVELOPER = 'developer',
  HR = 'hr',
  ADMIN = 'admin'
}

@Entity('users')
export class User extends BaseEntity {
  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ nullable: true })
  secondLastName?: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true, length: 5 })
  phoneCode?: string;

  @Column({ nullable: true, length: 13 })
  phone?: string;

  @Column({ nullable: true, unsigned: true })
  age?: number;

  @Column({ type: 'enum', enum: UserRole, default: UserRole.DEVELOPER })
  role: UserRole;

  @Column({ default: true })
  isActive: boolean;
}
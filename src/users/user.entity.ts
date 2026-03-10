import { BaseEntity } from "src/common/entities/base.entity";
import { UserRole } from "src/common/enums/user-role.enum";
import { Column, Entity } from "typeorm";

@Entity('users')
export class User extends BaseEntity {
  @Column({ length: 50 })
  firstName: string;

  @Column({ length: 50 })
  lastName: string;

  @Column({ nullable: true, length: 50 })
  secondLastName?: string;

  @Column({ unique: true, length: 100 })
  email: string;

  @Column({ length: 255 })
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
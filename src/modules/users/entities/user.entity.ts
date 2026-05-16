import { SoftDeletableEntity } from "src/common/entities/soft-deletable.entity";
import { UserRole } from "src/common/enums/user-role.enum";
import { Column, Entity } from "typeorm";

@Entity('users')
export class User extends SoftDeletableEntity {
  @Column({ length: 50 })
  firstName: string;

  @Column({ length: 50 })
  lastName: string;

  @Column({ nullable: true, length: 50 })
  secondLastName?: string;

  @Column({ unique: true, length: 100 })
  email: string;

  @Column({ length: 255 })
  passwordHash: string;

  @Column({ length: 5 })
  phoneCode: string;

  @Column({ length: 20 })
  phone: string;

  @Column( { type: 'date' })
  birthDate: Date;

  @Column({ 
    type: 'enum', 
    enum: UserRole, 
    default: UserRole.CANDIDATE 
  })
  role: UserRole;

  @Column({ default: true })
  isActive: boolean;
}
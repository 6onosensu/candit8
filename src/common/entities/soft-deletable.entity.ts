import { DeleteDateColumn } from "typeorm";
import { BaseEntity } from "./base.entity";

export abstract class SoftDeletableEntity extends BaseEntity {
  @DeleteDateColumn({ 
    type: 'timestamp with time zone', 
    nullable: true 
  })
  deletedAt: Date | null;

  isDeleted(): boolean {
    return this.deletedAt !== null;
  }
}
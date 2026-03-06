import { CanActivate, Injectable } from "@nestjs/common";

@Injectable()
export class RolesGuard implements CanActivate {
  constructor() {}

  canActivate(): boolean {
    return true;
  }
}
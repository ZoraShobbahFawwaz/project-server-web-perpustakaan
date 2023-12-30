import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { AdminService } from 'src/admin/admin.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private adminService: AdminService,
    private jwtService: JwtService
  ) {}

  async signIn(body: any) {
    let user: any
    user = await this.usersService.findByUsername(body.username)

    if(!user) {
      user = await this.adminService.findByUsername(body.username)
    }
 
    if (user?.password !== body.password) {
      throw new UnauthorizedException('password salah');
    }
    
    const payload = { sub: body.userID, username: user.username, role: user.role };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
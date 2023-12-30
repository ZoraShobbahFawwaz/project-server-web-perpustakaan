import { Body, Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Public } from 'src/public.decorator';
import { Roles } from 'src/role.decorator';
import { Role } from 'src/enum/role.enum';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Roles(Role.Admin)
    @Get('ngetest')
    ngetest() {
        return 'berhasil'
    }
    
    @Public()
    @HttpCode(HttpStatus.OK)
    @Post('login')
    signIn(@Body() signInDto: Record<string, any>) {
        return this.authService.signIn(signInDto);
    }
    
}   
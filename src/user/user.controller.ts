import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Public } from 'src/public.decorator';

//construcktor fungsi yg di panggil pertama
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  loginForUser(@Body()body: any) {
    return 
  }

  @Post('/login')
  masook(@Body() body: CreateUserDto) {
    return this.userService.masuk(body)
  }

  @Public()
  @Post('create')
  create(@Body() createUserDto: CreateUserDto) {
    console.log('masuk sini')
    return this.userService.createforpemula(createUserDto);
  }

  @Public()
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Get(':nim/user')
  findOneByNim(@Param('nim') nim: string) {
    return this.userService.findOneByNim(nim);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }

}

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Public } from 'src/public.decorator';
import { Role } from 'src/enum/role.enum';
import { Roles } from 'src/role.decorator';

@Roles(Role.Admin)
@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) { }

  @Public()
  @Post('/create')
  CreateAdmin(@Body() body: CreateAdminDto) {
    return this.adminService.createAdmin(body)
  }

  @Get()
  findAll() {
    return this.adminService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.adminService.findOne(id);
  }

  @Get(':np/nama')
  findOneByNp(@Param('np') np: string) {
    return this.adminService.findOneByNp(np);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateAdminDto) {
    return this.adminService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.adminService.remove(+id);
  }

}


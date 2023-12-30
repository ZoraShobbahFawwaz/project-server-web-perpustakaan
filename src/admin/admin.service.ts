import { Injectable } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Admin } from './entities/admin.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from 'src/enum/role.enum';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Admin) private adminRepository: Repository<Admin>,
    private jwtService: JwtService
  ) { }

  async findByUsername(username: string) {
    const admin = await this.adminRepository.findOne({
      where: {
        username: username
      }
    })

    return admin
  }

  async createAdmin(body: any) {
    const admin = this.adminRepository.create({
      adminID:body.adminID,
      nama:body.nama,
      username:body.username,
      password:body.password,
      np:body.np,
      no_hp:body.no_hp,
      role:Role.Admin 
    })
    await this.adminRepository.save(admin)
    return admin;
  }

  async findAll() {
    const user = await this.adminRepository.find()
    return user;
  }

  async findOne(adminID : string) {
    const admin = await this.adminRepository.findOne({
      where: {adminID}
    })
      return admin;
    }

  async findOneByNp(np : string) { 
    const admin = await this.adminRepository.findOne({
    where: {np}
  })
    return admin;
  }

  async update(id: number, body: UpdateAdminDto) {
    const admin= await this.adminRepository.findOneById(id) 
    Object.assign(admin,body)
    await this.adminRepository.save(admin)
    return admin
  }

  async remove(id: number) {
    const user= await this.adminRepository.delete(id)
    return user
  }
}



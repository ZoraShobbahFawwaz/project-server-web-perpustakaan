import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import { Role } from 'src/enum/role.enum';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    private jwtService: JwtService
  ){}

  async masuk(body: CreateUserDto) {
    const nama = body.nama
    const password = body.password

    const user = await this.userRepository.findOne({
      where : {
        nama,
        password
      } 
    })

    if(user) {
      const payload = {
        sub : user.userID,
        nama : user.nama
      }

      return {
        accessToken: await this.jwtService.signAsync(payload)
      } 
    }

    return 'gagal login'
  }

  async createforpemula(body: any) {
    console.log(body)
    const user=this.userRepository.create({
      nama:body.nama,
      nim:body.nim,
      jenis_kelamin:body.jenis_kelamin,
      username:body.username,
      password:body.password,
      email:body.email,
      no_hp:body.no_hp,
      role:Role.User
    })
    await this.userRepository.save(user)
    return user
  }

  async findAll() {
    const user = await this.userRepository.find()
    return user;
  }

  async findByUsername(username: string) {
    const user = await this.userRepository.findOne({
      where: {
        username : username
      }
    })

    return user
  }

  async findOne(userID : string) {
    const report = await this.userRepository.findOne({
      where: {userID}
    })
      return report;
    }

  async findOneByNim(nim : string) { 
    const user = await this.userRepository.findOne({
    where: {nim}
  })
    return user;
  }

  async update(id: number, body: UpdateUserDto) {
    const user= await this.userRepository.findOneById(id) 
    Object.assign(user,body)
    await this.userRepository.save(user)
    return user
  }

  async remove(id: number) {
    const user= await this.userRepository.delete(id)
    return user
  }
}


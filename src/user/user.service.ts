import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { userInfo } from 'os';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(@InjectReposiroty(User) private userRepository: Repository<User>){}

  create(body:any) {
    const user=this.userRepository.create({
      username:body.username,
      password:body.password,
      email:body.email
    })
    this.userRepository.save(user)
    return user
  }

  findAll() {
    return `afuewfhba`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
function InjectReposiroty(user: any): (target: typeof UserService, propertyKey: undefined, parameterIndex: 0) => void {
  throw new Error('Function not implemented.');
}


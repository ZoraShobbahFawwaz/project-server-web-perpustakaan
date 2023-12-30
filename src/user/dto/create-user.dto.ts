import { IsString } from "class-validator";

export class CreateUserDto {
    @IsString()
    nama: string

    @IsString()
    nim: string

    @IsString()
    username: string

    @IsString()
    password: string
}



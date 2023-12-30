import { IsString } from "class-validator";

export class CreateAdminDto {
    @IsString()
    nama: string

    @IsString()
    username: string

    @IsString()
    password: string
}

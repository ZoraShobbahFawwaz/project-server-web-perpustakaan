import { IsString } from "class-validator";

export class CreateBookDto {
    @IsString()
    judul_buku: string

    @IsString()
    pengarang: string

    @IsString()
    penerbit: string
}

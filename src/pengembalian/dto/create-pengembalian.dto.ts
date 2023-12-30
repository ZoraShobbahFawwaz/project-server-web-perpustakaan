import { IsString } from "class-validator";

export class CreatePengembalianDto {
    @IsString()
    nama: string

    @IsString()
    judul_buku: string

    @IsString()
    tanggal_pengembalian: string
}




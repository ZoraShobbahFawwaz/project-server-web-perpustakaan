import { IsString } from "class-validator";

export class CreateBorrowingBookDto {
    @IsString()
    nama: string

    @IsString()
    judul_buku: string

    @IsString()
    tanggal_peminjaman: string
}
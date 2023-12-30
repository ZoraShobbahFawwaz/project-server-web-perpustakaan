import { IsString } from "class-validator";

export class CreateReportDto {
    @IsString()
    bulan: string

    @IsString()
    buku_terlaris: string

    @IsString()
    total_denda: string
}




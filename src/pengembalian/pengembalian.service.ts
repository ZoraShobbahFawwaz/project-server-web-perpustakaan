import { Injectable } from '@nestjs/common';
import { CreatePengembalianDto } from './dto/create-pengembalian.dto';
import { UpdatePengembalianDto } from './dto/update-pengembalian.dto';
import { Pengembalian } from './entities/pengembalian.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PengembalianService{
  constructor(@InjectRepository(Pengembalian) private PengembalianRepository: Repository<Pengembalian>){}

  async create(body: any) {
    const pengembalian=this.PengembalianRepository.create({
      ID_Pengembalian:body.ID_Pengembalian,
      nama:body.nama,
      judul_buku:body.judul_buku,
      tanggal_peminjaman:body.tanggal_peminjaman,
      tanggal_pengembalian:body.tanggal_pengembalian,
      status:body.status,
      denda:body.denda
    })
    await this.PengembalianRepository.save(pengembalian)
    return pengembalian;
  }

  async findAll() {
    const pengembalian = await this.PengembalianRepository.find()
    return pengembalian;
  }

  async findOne(ID_Pengembalian: string) {
    const pengembalian = await this.PengembalianRepository.findOne({
    where: {ID_Pengembalian}  
    })
    return pengembalian
  }

  async findOneByName(nama : string) { 
    const pengembalian = await this.PengembalianRepository.findOne({
    where: {nama}
  })
    return pengembalian;
  }

  async update(id: number, body: UpdatePengembalianDto) {
    const pengembalian= await this.PengembalianRepository.findOneById(id) 
    Object.assign(pengembalian,body)
    await this.PengembalianRepository.save(pengembalian)
    return pengembalian
  }

  async remove(id: number) {
    const pengembalian= await this.PengembalianRepository.delete(id)
    return pengembalian
  }
}

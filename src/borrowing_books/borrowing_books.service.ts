import { Injectable } from '@nestjs/common';
import { UpdateBorrowingBookDto } from './dto/update-borrowing_book.dto';
import { Borrowing_book } from './entities/borrowing_book.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BorrowingBooksService{
  constructor(@InjectRepository(Borrowing_book) private Borrowing_bookRepository: Repository<Borrowing_book>){}

  async create(body: any) {
    const borrowing_book=this.Borrowing_bookRepository.create({
      ID_Peminjaman:body.ID_Peminjaman,
      nama:body.nama,
      judul_buku:body.judul_buku,
      tanggal_peminjaman:body.tanggal_peminjaman,
      tanggal_pengembalian:body.tanggal_pengembalian,
      status:body.status,
    })
    await this.Borrowing_bookRepository.save(borrowing_book)
    return borrowing_book;
  }

  async findAll() {
    const borrowing_book = await this.Borrowing_bookRepository.find()
    return borrowing_book;
  }

  async findOne(ID_Peminjaman: string) {
    const borrowing_book = await this.Borrowing_bookRepository.findOne({
    where: {ID_Peminjaman}  
    })
    return borrowing_book
  }

  async findOneByName(nama : string) { 
    const borrowing_book = await this.Borrowing_bookRepository.findOne({
    where: {nama}
  })
    return borrowing_book;
  }

  async update(id: number, body: UpdateBorrowingBookDto) {
    const borrowing_book= await this.Borrowing_bookRepository.findOneById(id) 
    Object.assign(borrowing_book,body)
    await this.Borrowing_bookRepository.save(borrowing_book)
    return borrowing_book
  }

  async remove(id: number) {
    const borrowing_book= await this.Borrowing_bookRepository.delete(id)
    return borrowing_book
  }
}

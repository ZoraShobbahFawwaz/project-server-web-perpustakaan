import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BooksService {
  constructor(@InjectRepository(Book) private bookRepository: Repository<Book>){}

  async create(body: any) {
    const books=this.bookRepository.create({
      bookID:body.bookID,
      pengarang:body.pengarang,
      judul_buku:body.judul_buku,
      penerbit:body.penerbit,
      stock_buku:body.stock_buku,
      tahun_terbit:body.tahun_terbit
    })
    await this.bookRepository.save(books)
    return books
  }

  async findAll() {
    const books = await this.bookRepository.find()
    return books;
  }

  async findOne(bookID: string) {
    const books = await this.bookRepository.findOne({
    where: {bookID}
  })
    return books;
  }

  async findOneByTitle(judul_buku: string) { 
    const books = await this.bookRepository.findOne({
    where: {judul_buku}
  })
    return books;
  }

  async update(id: number, body: UpdateBookDto) {
    const books= await this.bookRepository.findOneById(id) 
    Object.assign(books,body)
    await this.bookRepository.save(books)
    return books
  }

  async remove(id: number) {
    const books= await this.bookRepository.delete(id)
    return books
  }
}

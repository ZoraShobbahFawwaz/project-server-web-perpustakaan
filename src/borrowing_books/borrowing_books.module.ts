import { Module } from '@nestjs/common';
import { BorrowingBooksService } from './borrowing_books.service';
import { BorrowingBooksController } from './borrowing_books.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Borrowing_book } from './entities/borrowing_book.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Borrowing_book])
  ],
  controllers: [BorrowingBooksController],
  providers: [BorrowingBooksService],
})
export class BorrowingBooksModule {}

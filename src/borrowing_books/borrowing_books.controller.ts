import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BorrowingBooksService } from './borrowing_books.service';
import { CreateBorrowingBookDto } from './dto/create-borrowing_book.dto';
import { UpdateBorrowingBookDto } from './dto/update-borrowing_book.dto';
import { Role } from 'src/enum/role.enum';
import { Roles } from 'src/role.decorator';
import { Public } from 'src/public.decorator';

@Public()
@Controller('borrowing_book')
export class BorrowingBooksController {
  constructor(private readonly borrowingBooksService: BorrowingBooksService) {}

  @Post()
  create(@Body() createBorrowingBookDto: CreateBorrowingBookDto) {
    return this.borrowingBooksService.create(createBorrowingBookDto);
  }

  @Get()
  findAll() {
    return this.borrowingBooksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.borrowingBooksService.findOne(id);
  }

  @Get(':name/borrowing_book')
  findOneByName(@Param('name') nama: string) {
    return this.borrowingBooksService.findOneByName(nama);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBorrowingBookDto: UpdateBorrowingBookDto) {
    return this.borrowingBooksService.update(+id, updateBorrowingBookDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.borrowingBooksService.remove(+id);
  }
}

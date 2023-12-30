import { PartialType } from '@nestjs/mapped-types';
import { CreateBorrowingBookDto } from './create-borrowing_book.dto';

export class UpdateBorrowingBookDto extends PartialType(CreateBorrowingBookDto) {}

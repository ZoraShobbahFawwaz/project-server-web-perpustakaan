import { Module, ValidationPipe } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User} from './user/entities/user.entity';
import { BooksModule } from './books/books.module';
import { Book } from './books/entities/book.entity';
import { BorrowingBooksModule } from './borrowing_books/borrowing_books.module';
import { Borrowing_book } from './borrowing_books/entities/borrowing_book.entity';
import { AdminModule } from './admin/admin.module';
import { PengembalianModule } from './pengembalian/pengembalian.module';
import { Admin } from'./admin/entities/admin.entity';
import { Pengembalian } from './pengembalian/entities/pengembalian.entity';
import { ReportModule } from './report/report.module';
import { Report } from './report/entities/report.entity';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD, APP_PIPE } from '@nestjs/core';
import { AuthGuard } from './auth/auth.guard';
import { RoleGuard } from './role.guard';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'masoza',
      password: '123',
      database: 'perpustakaan',
      entities: [User,Book,Borrowing_book,Admin,Pengembalian,Report],
      synchronize: true
    }),
    UserModule,
    BooksModule,
    BorrowingBooksModule,
    AdminModule,
    PengembalianModule,
    ReportModule,
    AuthModule,
  ],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe
    },
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RoleGuard
    }
  ],
})
export class AppModule {}

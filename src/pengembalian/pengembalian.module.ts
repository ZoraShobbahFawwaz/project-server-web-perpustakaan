import { Module } from '@nestjs/common';
import { PengembalianService } from './pengembalian.service';
import { PengembalianController } from './pengembalian.controller';
import { Pengembalian } from './entities/pengembalian.entity'
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([Pengembalian])],
  controllers: [PengembalianController],
  providers: [PengembalianService],
})
export class PengembalianModule {}

import { Injectable } from '@nestjs/common';
import { CreateReportDto } from './dto/create-report.dto';
import { UpdateReportDto } from './dto/update-report.dto';
import { Report } from './entities/report.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ReportService {
  constructor(@InjectRepository(Report) private reportRepository: Repository<Report>){}

  async create(body: any) {
    const report=this.reportRepository.create({
      reportID:body.reportID,
      bulan:body.bulan,
      buku_terlaris:body.buku_terlaris,
      total_denda:body.total_denda

    })
    await this.reportRepository.save(report)
    return report
  }

  async findAll() {
    const report = await this.reportRepository.find()
    return report;
  }

  async findOne(reportID : string) {
    const report = await this.reportRepository.findOne({
      where: {reportID}
    })
      return report;
    }

  async findOneByMonth(bulan: string) { 
    const report = await this.reportRepository.findOne({
    where: {bulan}
  })
    return report;
  }

  async update(id: number, body: UpdateReportDto) {
    const report= await this.reportRepository.findOneById(id) 
    Object.assign(report,body)
    await this.reportRepository.save(report)
    return report
  }

  async remove(id: number) {
    const report= await this.reportRepository.delete(id)
    return report
  }
}

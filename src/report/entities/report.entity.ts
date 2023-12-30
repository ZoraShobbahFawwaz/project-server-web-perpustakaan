import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Report{
    @PrimaryGeneratedColumn()
    reportID: string
    
	@Column({type: 'varchar'  })
	bulan: string 

	@Column({ type: 'varchar', unique: true })
	buku_terlaris: string
	
	@Column({type: 'varchar'  })
	total_denda: string 

}
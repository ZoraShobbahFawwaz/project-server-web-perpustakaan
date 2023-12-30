import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Book{
    @PrimaryGeneratedColumn()
    bookID: string
    
	@Column({type: 'varchar', unique:true })
	judul_buku: string 

	@Column({ type: 'varchar'})
	pengarang: string
	
	@Column({type: 'varchar'})
	penerbit: string 

	@Column({type: 'varchar'})
	stock_buku: string 

    @Column({ type: 'varchar'})
	tahun_terbit: string
	
}

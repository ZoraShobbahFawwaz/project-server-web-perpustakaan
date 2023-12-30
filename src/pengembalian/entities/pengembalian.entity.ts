import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Pengembalian{
    @PrimaryGeneratedColumn()
    ID_Pengembalian: string
    
	@Column({type: 'varchar'  })
	nama: string 

	@Column({ type: 'varchar' })
	judul_buku: string

    @Column({ type: 'varchar' })
	tanggal_peminjaman: string

	@Column({ type: 'varchar' })
	tanggal_pengembalian: string

	@Column({ type: 'varchar' })
	status: string

    @Column({ type: 'varchar' })
	denda: string
}
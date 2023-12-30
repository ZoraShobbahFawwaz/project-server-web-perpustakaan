import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { Role } from 'src/enum/role.enum'

@Entity()
export class Admin{
    @PrimaryGeneratedColumn()
    adminID: string
    
	@Column({type: 'varchar'})
	nama: string 

	@Column({ type: 'varchar', unique : true})
	username: string
	
	@Column({type: 'varchar'})
	password: string 

	@Column({type: 'varchar'})
	np: string 

    @Column({ type: 'varchar'})
	no_hp: string
	
	@Column({ type: 'enum', enum:Role})
	role: Role
}

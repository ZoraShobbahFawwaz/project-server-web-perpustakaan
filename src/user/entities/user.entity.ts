import { Role } from 'src/enum/role.enum'
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    userID: string
    
	@Column({type: 'varchar'  })
	nama: string 

	@Column({ type: 'varchar', unique: true })
	nim: string
	
	@Column({type: 'varchar'  })
	jenis_kelamin: string 

    @Column({ type: 'varchar', unique: true })
	username: string

	@Column({ type: 'varchar', unique: true })
	email: string

	@Column({ type: 'varchar' })
	password: string
	
	@Column({ type: 'varchar' })
	no_hp: string

	@Column({ type: 'enum', enum:Role})
	role: Role
}

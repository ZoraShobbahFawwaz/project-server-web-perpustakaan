import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    userID: string

    @Column({ type: 'varchar', unique: true })
	username: string

	@Column({ type: 'varchar', unique: true })
	email: string

	@Column({ type: 'varchar' })
	password: string

	@Column({ type: 'varchar',default: 'user' })
	role: string

	@Column({ type: 'int', default: 0})
	point: number

	@Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    joinAt: Date;

	@Column({ type: 'date', nullable: true})
	suspend: Date

	@Column({ type: 'boolean', default: false})
	banned: boolean
}

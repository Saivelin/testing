import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, Unique } from 'typeorm'

@Entity()
@Unique(['article']) // уникальный артикул
export class Item {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    article: string // уникальный артикул

    @Column()
    name: string // название товара

    @Column('decimal')
    price: number

    @Column('int')
    quantity: number

    @CreateDateColumn()
    createdAt: Date
}

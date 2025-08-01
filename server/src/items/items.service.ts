import { Injectable, NotFoundException } from '@nestjs/common'
import { CreateItemDto } from './dto/create-item.dto'
import { Repository } from 'typeorm'
import { Item } from './entities/item.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { UpdateItemDto } from './dto/update-item.dto'

@Injectable()
export class ItemsService {
    constructor(
        @InjectRepository(Item)
        private readonly itemsRepository: Repository<Item>
    ) {}

    async create(createItemDto: CreateItemDto): Promise<Item> {
        const item = this.itemsRepository.create(createItemDto)
        return this.itemsRepository.save(item)
    }

    async findAll(): Promise<Item[]> {
        return this.itemsRepository.find()
    }

    async findOne(id: number): Promise<Item> {
        const item = await this.itemsRepository.findOneBy({ id })
        if (!item) {
            throw new NotFoundException(`Item with ID ${id} not found`)
        }
        return item
    }

    async update(id: number, updateItemDto: UpdateItemDto): Promise<Item> {
        const item = await this.findOne(id)
        const updated = Object.assign(item, updateItemDto)
        return this.itemsRepository.save(updated)
    }

    async remove(id: number): Promise<void> {
        const result = await this.itemsRepository.delete(id)
        if (result.affected === 0) {
            throw new NotFoundException(`Item with ID ${id} not found`)
        }
    }
}

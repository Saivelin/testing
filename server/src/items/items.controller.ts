import { Controller, Get, Post, Body } from '@nestjs/common'
import { ItemsService } from './items.service'
import { CreateItemDto } from './dto/create-item.dto'

@Controller('items')
export class ItemsController {
    constructor(private readonly itemsService: ItemsService) {}
    @Get()
    findAll() {
        return this.itemsService.findAll()
    }

    @Post()
    create(@Body() product: CreateItemDto) {
        return this.itemsService.create(product)
    }
}

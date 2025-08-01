import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsPositive, IsString, Min } from 'class-validator'

export class CreateItemDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    article: string // уникальный артикул

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    name: string // название товара

    @ApiProperty({ example: 999.99 })
    @IsPositive()
    price: number

    @ApiProperty({ example: 10 })
    @Min(0)
    quantity: number
}

import { Controller, ParseIntPipe } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PaginationDto } from 'src/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) { }

  // @Post()
  @MessagePattern({ cmd: 'create_product' })
  create(
    @Payload() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  // @Get()
  @MessagePattern({ cmd: 'find_all_product' })
  findAll(
    @Payload() paginationDto: PaginationDto
  ) {
    return this.productsService.findAll(paginationDto);
  }

  // @Get(':id')
  @MessagePattern({ cmd: 'find_product_by_id' })
  findOne(
    @Payload('id', ParseIntPipe) id: number) {
    return this.productsService.findOne(id);
  }

  // @Patch(':id')
  @MessagePattern({ cmd: 'update_product_by_id' })
  update(
    @Payload() updateProductDto: UpdateProductDto) {
    return this.productsService.update(updateProductDto.id, updateProductDto);
  }

  // @Delete(':id')
  @MessagePattern({ cmd: 'delete_product_by_id' })
  remove(
    @Payload('id', ParseIntPipe) id: number) {
    return this.productsService.remove(id);
  }
}
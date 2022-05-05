// 기본 메소드를 이용하여 데이터 생성과 조회 기능을 작성합니다.
import { Repository } from "typeorm";
import { Product } from './product.entity';
import { ProductDto } from './product.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product) private readonly productRepository: Repository<Product>
    ) { }
    async createProduct(data: ProductDto) {
        return await this.productRepository.create(data).save();
    }
    async getProducts() {
        return await this.productRepository.find();
    }
}

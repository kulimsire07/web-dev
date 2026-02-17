import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  rating: number;
  image: string;
  images: string[];
  link: string;
}

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'iPhone 15 128GB',
      description: 'Новый iPhone с потрясающими функциями.',
      price: 549000,
      rating: 4.8,
      image: 'assets/images/iphone15-1.jpg',
      images: ['assets/images/iphone15-1.jpg','assets/images/iphone15-2.jpg'],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-107127330/'
    },
    {
      id: 2,
      name: 'Samsung Galaxy S23',
      description: 'Флагман Samsung с отличной камерой.',
      price: 499990,
      rating: 4.6,
      image: 'assets/images/samsung-1.jpg',
      images: ['assets/images/samsung-1.jpg','assets/images/samsung-2.jpg'],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s23-8gb-256gb-106444331/'
    },
    {
      id: 3,
      name: 'Xiaomi Redmi Note 12',
      description: 'Стильный и мощный смартфон.',
      price: 119990,
      rating: 4.4,
      image: 'assets/images/Xiaomi-1.jpg',
      images: ['assets/images/Xiaomi-1.jpg','assets/images/Xiaomi-2.jpg'],
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-12-128gb-104394722/'
    },
    {
      id: 4,
      name: 'MacBook Air M2',
      description: 'Лёгкий и быстрый ноутбук.',
      price: 699990,
      rating: 4.9,
      image: 'assets/images/Mackbook-1.jpg',
      images: ['assets/images/Mackbook-1.jpg','assets/images/Mackbook-2.jpg'],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-m2-512gb-107452006/'
    },
    {
      id: 5,
      name: 'Apple Watch Series 9',
      description: 'Новые умные часы Apple.',
      price: 249990,
      rating: 4.7,
      image: 'assets/images/AppleWatch-1.jpg',
      images: ['assets/images/AppleWatch-1.jpg','assets/images/AppleWatch-2.jpg'],
      link: 'https://kaspi.kz/shop/p/apple-watch-series-9-45-mm-107564980/'
    },
    {
      id: 6,
      name: 'Sony WH-1000XM5',
      description: 'Наушники с шумоподавлением.',
      price: 129990,
      rating: 4.8,
      image: 'assets/images/SonyWH-1000XM5-1.jpg',
      images: ['assets/images/SonyWH-1000XM5-1.jpg','assets/images/SonyWH-1000XM5-2.jpg'],
      link: 'https://kaspi.kz/shop/p/sony-wh-1000xm5-104374789/'
    },
    {
      id: 7,
      name: 'iPad Air 5',
      description: 'Мощный планшет Apple.',
      price: 369990,
      rating: 4.7,
      image: 'assets/images/Ipad-1.jpg',
      images: ['assets/images/Ipad-1.jpg','assets/images/ipad-2.jpg'],
      link: 'https://kaspi.kz/shop/p/apple-ipad-air-5-64gb-107127339/'
    },
    {
      id: 8,
      name: 'Huawei MateBook D16',
      description: 'Производительный ноутбук.',
      price: 399990,
      rating: 4.5,
      image: 'assets/images/Huawei-1.jpg',
      images: ['assets/images/Huawei-1.jpg','assets/images/Huawei-2.jpg'],
      link: 'https://kaspi.kz/shop/p/huawei-matebook-d16-107457890/'
    },
    {
      id: 9,
      name: 'Google Pixel 7',
      description: 'Смартфон с чистым Android.',
      price: 299990,
      rating: 4.6,
      image: 'assets/images/GooglePixel-1.jpg',
      images: ['assets/images/GooglePixel-1.jpg','assets/images/GooglePixel-2.jpg'],
      link: 'https://kaspi.kz/shop/p/google-pixel-7-128gb-107439321/'
    },
    {
      id: 10,
      name: 'Samsung Galaxy Watch 6',
      description: 'Стильные умные часы.',
      price: 149990,
      rating: 4.7,
      image: 'assets/images/SamsungWatch-1.jpg',
      images: ['assets/images/SamsungWatch-1.jpg','assets/images/SamsungWatch-2.jpg'],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-watch-6-45-mm-107451002/'
    }
  ];
}

import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product.list.component.css']
})
export class ProductListComponent implements OnInit {
    // tslint:disable-next-line: no-inferrable-types
    pageTitle: string = 'Product List';
    // tslint:disable-next-line: no-inferrable-types
    imageWidth: number = 50;
    // tslint:disable-next-line: no-inferrable-types
    imageMargin: number = 2;
    // tslint:disable-next-line: no-inferrable-types
    showImage: boolean = false;
    // tslint:disable-next-line: no-inferrable-types
    listFilter: string = 'cart';
    products: IProduct[] = [
        {
            'productId': 1,
            'productName': 'Leaf Rake',
            'productCode': 'GDN-0011',
            'releaseDate': 'March 19, 2016',
            'description': 'Leaf rake with 48-inch wooden handle.',
            'price': 19.95,
            'starRating': 3.2,
            'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png'
          },
          {
            'productId': 2,
            'productName': 'Garden Cart',
            'productCode': 'GDN-0023',
            'releaseDate': 'March 18, 2016',
            'description': '15 gallon capacity rolling garden cart',
            'price': 32.99,
            'starRating': 4.2,
            'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png'
          }
    ];

    // method to hide and show the image
    toggleImage (): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        console.log('In OnInit');
    }
}

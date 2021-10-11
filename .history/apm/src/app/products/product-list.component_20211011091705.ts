import { Component } from "@angular/core"

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html'
})

export class ProductListComponent{
    pageTitle: string = " Product List";
    imageWidth: number = 50;
    imageMargin: number= 2;
    showImage: boolean= false;
    listFilter: string = "cart";
    
    products: any[]=[
        {
            "productId": 2,
            "productName": 'Garden Cart',
            "productCode": 'GDN-0023',
            "releaseDate": "March 18, 2021",
            "description": "15 gallon capacity cart",
            "Price": 32.99,
            "starRating": 4.2,
            "imageUrl": 'assets/images/garden_cart.png',
        },
        {
            "productId": 5,
            "productName": "Hammer",
            "productCode": "TBX-0048",
            "releaseDate": "May 21, 2021",
            "Price": 32.99,
            "starRating": 4.2,
            "imageUrl":  'assets/images/hammer.png',
        },

    ];
    toggleImage(): void{
        this.showImage = !this.showImage;
    }
}
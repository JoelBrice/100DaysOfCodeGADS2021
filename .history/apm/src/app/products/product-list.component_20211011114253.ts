import { Component,OnInit } from "@angular/core";
import { IProduct } from "./product";

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit{
   
    pageTitle: string = " Product List";
    imageWidth: number = 50;
    imageMargin: number= 2;
    showImage: boolean= false;
    private _listFilter: string = "";
    get listFilter(){
        return this._listFilter;
    }
    filteredProducts: IProduct[] = [];

    set listFilter(value: string){
        this._listFilter = value;
        console.log('In setter ', value);
        this.filteredProducts = this.performFilter(value);
    }

    message: string = '';
    
    products: IProduct[]=[
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
            "description": "Curved claw steel hammer",
            "Price": 32.99,
            "starRating": 4.2,
            "imageUrl":  'assets/images/hammer.png',
        },

    ];
    toggleImage(): void{
        this.showImage = !this.showImage;
    }
    onRatingClicked(message: string): void{
        this.message = message;
    }

performFilter(filterBy: string): IProduct[]{
    filterBy = filterBy.toLowerCase();
    return this.products.filter((product: IProduct)=>{
        product.productName.toLocaleLowerCase().includes(filterBy);
    });
}

    ngOnInit(): void {
        this._listFilter = 'cart';
    }
}
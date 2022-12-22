import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { NavController } from '@ionic/angular';
import { ProductsService } from '../services/products.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  formsCreator: FormGroup [] = []
  constructor(public nav: NavController, public productsService: ProductsService) {
    
    this.productsService.prodcuts.subscribe((data: any)=>{
      console.log('changed', data.values)
      this.formsCreator = data
    })
  }

  ionViewWillEnter(){
  }
  

  createForm(){
    this.nav.navigateForward(['form'])
  }

  editForm(index: any){
    this.nav.navigateForward(['form'], {queryParams: {index: index}})
  }

  deleteForm(index: any){
    this.productsService.deleteProduct(index)
  }
  
}

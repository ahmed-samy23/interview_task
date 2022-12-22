import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {

  formCreator: FormGroup [] = [];
  newForm: any;

  isSubmit: boolean = false
  index: any
  constructor(public formBuilder: FormBuilder, public productsService: ProductsService, private route: ActivatedRoute) {
    
   }

  ngOnInit() {
    this.route.queryParams.subscribe( (data: any)=>{
      this.index = data['index']
      if(this.index) this.createForm()
      else this.createForm()
    })
  }

  createForm(){
    if(this.index) {
      let form = this.productsService.getProduct(this.index)
      this.newForm = form
    }else {
      let form = this.formBuilder.group({
        name: ['', Validators.compose([Validators.required])],
        phone: ['', Validators.compose([Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")])],
        email: ['', Validators.compose([Validators.required, Validators.email])]
      })
      this.newForm = form
      if(this.isSubmit) this.isSubmit = false
    }
  }

  get f(){  
    return this.newForm.controls;  
  }  

  saveForm(){
    if(this.index) {
      this.isSubmit = true
      this.productsService.updateProdcuts(this.index, this.newForm)
    }else{
      this.isSubmit = true
      this.productsService.addProduct(this.newForm)
    }
  }
}

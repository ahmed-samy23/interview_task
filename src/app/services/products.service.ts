import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  public prodcutsForms: BehaviorSubject<FormGroup[]> = new BehaviorSubject<FormGroup[]>([]);
  constructor() { }

  prodcuts = this.prodcutsForms.asObservable()

  getProduct(index: any){
    const currentForms = this.prodcutsForms.getValue()
    return currentForms[index]
  }

  updateProdcuts(index: any, prodcut: any) {
    const currentForms = this.prodcutsForms.getValue()
    currentForms[index] = prodcut
    this.prodcutsForms.next(currentForms);
  }

  addProduct(prodcut: any) {
    const currentForms = this.prodcutsForms.getValue()
    currentForms.push(prodcut)
    this.prodcutsForms.next(currentForms)
  }

  deleteProduct(index: any){
    const currentForms = this.prodcutsForms.getValue()
    currentForms.splice(index, 1)
    this.prodcutsForms.next(currentForms)
  }
}

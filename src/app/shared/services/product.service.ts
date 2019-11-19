import { Injectable } from '@angular/core';
import { Product } from '../classes/product';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';
import { AngularFireStorageReference, AngularFireUploadTask, AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { IProduct } from '../interfaces/product.interface';
import { UploadLogoBrendService } from './upload-logo-brend.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  titleEdit: string;
  subscribeEdit: string;
  urlImgEdite: string;
  productForEdit: any;
  idProdEdit: string;

  category: string;
  title: string;
  subscribe: string;
  imgUrl: string;
  brandName: string;
  power: string;
  type: string;

  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadProgress: Observable<number>;
  downloadURL: Observable<string>;
  urlImage: string;

  arrProduct: Array<Product>;

isChecked: boolean;
powerVal: string ='';

  constructor(private firestore: AngularFirestore, public firestorage: AngularFireStorage) {
    this.getProducts();
  }

  filterPower(val){
    this.powerVal = val;
    console.log(this.powerVal);
    if(this.isChecked === true){
      this.isChecked = false;
    } else{
      this.isChecked = true;
    }
    
  }



  editeProd(id): void {
    this.productForEdit = this.arrProduct.find(function (val) {
      if (val.id === id) {
        return val;
      }
    });
    // console.log(this.productForEdit);
    this.titleEdit = this.productForEdit.title;
    this.subscribeEdit = this.productForEdit.subscribe;
    this.urlImgEdite = this.productForEdit.imgUrl;
    this.idProdEdit = id;
  }



  public saveEditeProduct(form2: NgForm) {

    const data = Object.assign({}, form2.value);
    this.firestore.doc('products/' + this.idProdEdit).update(data);
    console.log(data);
    console.log(this.arrProduct);
    
    
    // this.resetForm();
  }


  // public resetForm(form?: NgForm): void {
  //   if (form != null) {
  //     form.resetForm();
  //   }
  //   // this.id = null,
  //   this.title = '';
  //   this.subscribe = '';
  //   this.imgUrl = '';
  // }


  public addProduct(): void {
    console.log(this.urlImage);
    this.imgUrl = this.urlImage;
  }

  public onSubmit(form: NgForm) {

    const data = Object.assign({}, form.value);
    delete data.id;
    if (form.value.id == null) {
      this.firestore.collection('products').add(data);
    } else {
      this.firestore.doc('products/' + form.value.id).update(data);
    }
    console.log(this.arrProduct);
    // this.resetForm();
  }




  public getProducts() {
    this.firestore.collection('products').snapshotChanges().subscribe(
      arrayBlogs => {
        this.arrProduct = arrayBlogs.map(product => {
          return {
            id: product.payload.doc.id,
            ...product.payload.doc.data()
          } as IProduct;
        });
        // console.log(this.arrProduct);
      }
    );
  }

  public upload(event): void {
    const id = Math.random().toString(36).substring(2);
    this.ref = this.firestorage.ref(`imgProducts//${this.category}/${id}`);
    this.task = this.ref.put(event.target.files[0]);
    this.uploadProgress = this.task.percentageChanges();
    this.task.snapshotChanges().pipe(
      finalize(() => {
        this.downloadURL = this.ref.getDownloadURL()
        this.downloadURL.subscribe(url => this.urlImage = url);
      })
    ).subscribe();
  }

  onDelete(id: string) {
    if (confirm('Are you sure to delete this record')) {
      this.firestore.doc('products/' + id).delete();
    }
  }




}

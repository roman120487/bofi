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

  category: string = 'Виберіть категорію товару...';
  title: string;
  subscribe: string;
  imgUrl: string;
  brandName: string = 'Виберіть назву бренду';
  power: string = 'Виберіть потужність приладу...';
  type: string = 'Виберіть тип приладу...';

  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadProgress: Observable<number>;
  downloadURL: Observable<string>;
  urlImage: string;

  arrProduct: Array<Product>;


  selectHotPumps: boolean = false;
  selectCotels: boolean = false;
  selectAir: boolean = false;
  selectFrozen: boolean = false;

  constructor(private firestore: AngularFirestore, public firestorage: AngularFireStorage) {
    this.getProducts();
    console.log(this.uploadProgress);


  }

  selectCategory(): void {
    if (this.category === 'opalenya') {
      this.selectCotels = true;
      this.selectHotPumps = false;
      this.selectAir = false;
      this.selectFrozen = false;
    } else if (this.category === 'hotpumps') {
      this.selectCotels = false;
      this.selectHotPumps = true;
      this.selectAir = false;
      this.selectFrozen = false;
    } else if (this.category === 'airsystems') {
      this.selectCotels = false;
      this.selectHotPumps = false;
      this.selectAir = true;
      this.selectFrozen = false;
    } else if (this.category === 'frozensystems') {
      this.selectCotels = false;
      this.selectHotPumps = false;
      this.selectAir = false;
      this.selectFrozen = true;
    }
    console.log(this.category);

  }

  editeProd(id): void {
    this.productForEdit = this.arrProduct.find(function (val) {
      if (val.id === id) {
        return val;
      }
    });
    this.titleEdit = this.productForEdit.title;
    this.subscribeEdit = this.productForEdit.subscribe;
    this.urlImgEdite = this.productForEdit.imgUrl;
    this.idProdEdit = id;
  }



  public saveEditeProduct(form2: NgForm) {

    const data = Object.assign({}, form2.value);
    this.firestore.doc('products/' + this.idProdEdit).update(data);
  }


  public resetForm(form?: NgForm): void {
    if (form != null) {
      form.resetForm();
    }
    this.title = '';
    this.subscribe = '';
    this.imgUrl = '';
    this.brandName = 'Виберіть назву бренду';
    this.power = 'Виберіть потужність приладу...';
    this.type = 'Виберіть тип приладу...';
    this.category = 'Виберіть категорію товару...';
    this.downloadURL = undefined;
  }


  public addProduct(): void {
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
    this.resetForm();
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

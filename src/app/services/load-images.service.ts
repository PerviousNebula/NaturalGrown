import { Injectable } from '@angular/core';
import { AngularFirestore } from "angularfire2/firestore";
import * as firebase from 'firebase';
import { FileItem } from '../models/file-item';

@Injectable({
  providedIn: 'root'
})
export class LoadImagesService {
  private IMAGES_SOURCE = 'img';

  constructor(private db:AngularFirestore) { }

  uploadImages(images:FileItem[]) {
    const storageRef = firebase.storage().ref();
    for (const item of images) {
      item.isLoading = true;
      if(item.progress >= 100)
        continue;
      const uploadTask:firebase.storage.UploadTask = storageRef.child(`${this.IMAGES_SOURCE}/${item.fileName}`).put(item.doc);
      uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, 
        (snapshot: firebase.storage.UploadTaskSnapshot) => item.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
        (error) => console.error("Error al subir",error),
        () => {
          console.log("Imagen cargada correctamente");
          item.url = uploadTask.snapshot.downloadURL;
          item.isLoading = false;
          this.saveImg({
            name: item.fileName,
            url: item.url
          });
        });
    }

  }

  private saveImg(image:{name:string,url:string}) {
    this.db.collection(`/${this.IMAGES_SOURCE}`).add(image);
  }
}

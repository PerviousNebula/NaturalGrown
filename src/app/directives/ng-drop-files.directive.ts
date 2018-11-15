import { Directive, EventEmitter, ElementRef, HostListener, Input, Output } from '@angular/core';
import { FileItem } from '../models/file-item';

@Directive({
  selector: '[appNgDropFiles]'
})
export class NgDropFilesDirective {

  @Input() docs: FileItem[] = [];
  @Output() mouseOn: EventEmitter<boolean> = new EventEmitter();
  
  constructor() { }

  @HostListener('dragover', ['$event'])
  public onDragEnter(event:any){
    this.mouseOn.emit(true);
    this._preventStop(event);
  }

  @HostListener('dragleave', ['$event'])
  public onDragLeave(event:any){
    this.mouseOn.emit(false);
  }

  @HostListener('drop', ['$event'])
  public onDrop(event:any){
    const transfer = this._getTransfer(event);
    if(!transfer) {
      return;
    }
    this._getFiles(transfer.files);
    this._preventStop(event);
    this.mouseOn.emit(false);
  }


  private _getTransfer(event:any) {
    return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTrasnfer;
  }

  private _getFiles(listFiles: FileList) {
    //console.log(listFiles);
    for(const property in Object.getOwnPropertyNames(listFiles)){
      const tempFile = listFiles[property];
      if(this._fileCanBeUploaded(tempFile)) {
        const newFile = new FileItem(tempFile);
        this.docs.push(newFile);
      }
    }
    console.log(this.docs);
  }

  //Validaciones
  private _fileCanBeUploaded(doc:File): boolean {
    if(!this._docUploadedAlready(doc.name) && this._isImage(doc.type)) {
      return true;
    } else {
      return false;
    }
  }

  private _preventStop(event) {
    event.preventDefault();
    event.stopPropagation();
  }

  private _docUploadedAlready(docName:string): boolean {
    for(const doc of this.docs) {
      if(doc.fileName == docName) {
        console.log('El archivo ' + docName + ' ya está agregado');
        return true;
      } 
    }
    return false;
  }

  private _isImage(fileType:string): boolean {
    return (fileType == '' || fileType == undefined) ? false : fileType.startsWith('image');
  }

}

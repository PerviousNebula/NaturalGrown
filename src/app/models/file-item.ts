export class FileItem {
    public doc:File;
    public fileName:string;
    public url:string;
    public isLoading:boolean;
    public progress:number;

    constructor (doc:File) {
        this.doc = doc;
        this.fileName = doc.name;
        this.isLoading = false;
        this.progress = 0;

    }

}
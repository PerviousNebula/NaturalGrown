export class Marker {
    public id:number;
    public title:string;
    public desc:string;
    public price:string;
    public lat:number;
    public lon:number;

    constructor(id:number, title:string, desc:string, price:string, lat:number, lon:number) {
        this.id = id;
        this.title = title;
        this.desc = desc;
        this.price = price;
        this.lat = lat;
        this.lon = lon;
    } 
}
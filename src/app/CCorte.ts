export class CCorte {

id:number
descripcion:string 
costo:number
private static instance: CCorte;




public static getInstance(): CCorte {
    if (!CCorte.instance) {
        CCorte.instance = new CCorte();
    }
    return CCorte.instance;
}

public abc(){
    
}

}

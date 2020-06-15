import { CCorte } from './CCorte';


export class CUsuario {

nombre:string;
imagen:string;
turno:number;
corte:CCorte;

private static instance: CUsuario;


// Patron Singleton
public static getInstance(): CUsuario {
    if (!CUsuario.instance) {
        CUsuario.instance = new CUsuario();
    }
    return CUsuario.instance;
}




 
     

 
    


}

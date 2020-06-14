

export class CUsuario {

nombre:string;
imagen:string;
turno:number;





private static instance: CUsuario;


// Patron Singleton
public static getInstance(): CUsuario {
    if (!CUsuario.instance) {
        CUsuario.instance = new CUsuario();
    }
    return CUsuario.instance;
}




 
     

 
    


}

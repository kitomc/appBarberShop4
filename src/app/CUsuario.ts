import { CCorte } from './CCorte';


export class CUsuario {

    public id: number;
	public idSocialUser: string;
	public nombre: string;
	public telefono: string;
	public turno: string;
	public idCorte: number;
	public idEstado: number;
    public imagen: string;
    
private static instance: CUsuario;
public static turno;

// Patron Singleton
public static getInstance(): CUsuario {
    if (!CUsuario.instance) {
        CUsuario.instance = new CUsuario();
    }
    return CUsuario.instance;
}






 
     

 
    


}

import { Component, OnInit, Input } from '@angular/core';
import { CUsuario } from 'src/app/CUsuario';
import { ColaService } from 'src/app/cola.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cola-usuario',
  templateUrl: './cola-usuario.component.html',
  styleUrls: ['./cola-usuario.component.css']
})
export class ColaUsuarioComponent implements OnInit {

 

  constructor(private colaServicio :ColaService) { }

  clientes$: Observable<CUsuario[]>;
  clientes : CUsuario []=[];
    
  ngOnInit(): void {
    this.clientes$ = this.colaServicio.getClientes$();
    this.clientes$.subscribe(clientes => this.clientes = clientes);
  }
 
}

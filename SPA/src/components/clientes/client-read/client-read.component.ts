import { Component, OnInit } from '@angular/core';
import { Client } from '../client.model';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client-read',
  templateUrl: './client-read.component.html',
  styleUrls: ['./client-read.component.scss']
})
export class ClientReadComponent implements OnInit {

  clients:  Client[]
  displayedColumns = ['CodigoCliente', 'Nome', 'CPF', 'Sexo', 'Email', 'Action']
  dados:any;
  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.clientService.read().subscribe(clients => {
      this.dados = clients
      this.clients = this.dados.resposta
    })
  }

}
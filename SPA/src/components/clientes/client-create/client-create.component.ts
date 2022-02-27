import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../client.model';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.scss']
})
export class ClientCreateComponent implements OnInit {

  client: Client = {
    id: 0,
    CodigoCliente: '',
    Nome: '',
    CPF: '',
    Sexo: '',
    Email: ''
  }

  constructor(private clientService: ClientService,
      private router: Router) { }

  ngOnInit(): void {
    
  }

  createClient(): void {
    this.clientService.create(this.client).subscribe(() => {
      this.clientService.showMessage('Cliente criado!')
      this.router.navigate(['/products'])
    })

  }

  cancel(): void {
    this.router.navigate(['/client'])
  }

}
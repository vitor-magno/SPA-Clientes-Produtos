import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../client.model';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client-delete',
  templateUrl: './client-delete.component.html',
  styleUrls: ['./client-delete.component.scss']
})
export class ClientDeleteComponent implements OnInit {

   client: Client;
   id:any;

  constructor(
    private clientService: ClientService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
   
    this.id  = this.route.snapshot.paramMap.get('id');
    this.clientService.readById(this.id).subscribe((client) => {
      console.log(client)
      this.client = client
    });
  }

  deleteClient(): void {
    this.clientService.delete(this.id).subscribe(() => {
      this.clientService.showMessage("Produto excluido com sucesso!");
      delete this.id  
      this.router.navigate(["/client"]);
     });
  }

  cancel(): void {
    this.router.navigate(["/client"])
  }
}

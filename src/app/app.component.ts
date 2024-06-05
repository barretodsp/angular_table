import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-root',
  styleUrl: './app.component.scss',
  templateUrl: './app.component.html',
})

export class AppComponent implements OnInit {
  // @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  displayedColumns:string[] = [
      'unidade', 
      'atendimento',
      'paciente', 
      'idPaciente', 
      'dataPedido',
      'dataRealizacao',
      'status',
      'prioridade'
    ]
 
  columnLabels: {[key:string]: string} = {
    unidade: 'Unidade', 
    atendimento: 'Atendimento' ,
    paciente: 'Paciente',
    idPaciente: 'Id Paciente',
    dataPedido: 'Data (Pedido)',
    dataRealizacao: 'Data (Realização)',
    status: 'Status',
    prioridade: 'Prioridade'
  }

  // dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  title = 'angular-table';

  // constructor() { }
  ngOnInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.sortingDataAccessor = (data:any, sortHeaderId:string) => {
      return data[sortHeaderId].value
    };
  }
}

export interface Element {
  name: any;
  position: any;
  weight: any;
  symbol: any;
}

const ELEMENT_DATA = [
  {
    unidade: {value: 'OSASCO', idUnidade: 510}, 
    atendimento: {value: 9000000177853594},
    paciente: {value: 'Enrico Unid=510 PID=4628131'},
    idPaciente: {value: '4628131'},
    dataPedido: {value: '2024-05-29T20:39:00.000Z'},
    dataRealizacao: {value: '2024-05-30T20:39:00.000Z'},
    status: {value: 'Para Laudar', background: '#0E830C'},
    prioridade: {value: '0 - Notório', background: '#2094ff'}
  },
  {
    unidade: {value: 'BARRA DOR', idUnidade: 54}, 
    atendimento: {value: 9000040001450974},
    paciente: {value: 'FERNANDO Unid=522 PID=80990'},
    idPaciente: {value: '80990'},
    dataPedido: {value: '2024-05-27T20:39:00.000Z'},
    dataRealizacao: {value: '2024-05-28T22:48:00.000Z'},
    status: {value: 'Para Laudar', background: '#0E830C'},
    prioridade: {value: '0 - Notório', background: '#2094ff'}
  },
  {
    unidade: {value: 'BARRA DOR', idUnidade: 54}, 
    atendimento: {value: 9900040001450975},
    paciente: {value: 'teste Unid=522 PID=80990'},
    idPaciente: {value: '80991'},
    dataPedido: {value: '2024-05-20T20:39:00.000Z'},
    dataRealizacao: {value: '2024-05-21T22:48:00.000Z'},
    status: {value: 'Para Laudar', background: '#0E830C'},
    prioridade: {value: '0 - Notório', background: '#2094ff'}
  },
];


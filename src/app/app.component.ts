import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { CustomCell } from './custom-cell/custom-cell.component';

@Component({
  selector: 'app-root',
  styleUrl: './app.component.scss',
  templateUrl: './app.component.html',
})

export class AppComponent implements OnInit {
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
 
  columnsConfig = [
    { columnId: 'unidade', label: 'Unidade', component: CustomCell},
    { columnId: 'atendimento', label: 'Atendimento'},
    { columnId: 'paciente', label: 'Paciente', component: CustomCell},
    { columnId: 'idPaciente', label: 'ID Paciente'},
    { columnId: 'dataPedido', label: 'Data(Pedido)', component: CustomCell},
    { columnId: 'dataRealizacao', label: 'Data(Realização)', component: CustomCell},
    { columnId: 'status', label: 'Status'},
    { columnId: 'prioridade', label: 'Prioridade'},
  ]

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

  columnsDefinition: {[key:string]: any} = {
    unidade: { columnId: 'unidade', label: 'Unidade', component: CustomCell}, 
    atendimento: { columnId: 'atendimento', label: 'Atendimento'},
    paciente:  { columnId: 'paciente', label: 'Paciente', component: CustomCell},
    idPaciente:  { columnId: 'idPaciente', label: 'ID Paciente'},
    dataPedido:  { columnId: 'dataPedido', label: 'Data(Pedido)', component: CustomCell},
    dataRealizacao:    { columnId: 'dataRealizacao', label: 'Data(Realização)', component: CustomCell},
    status:  { columnId: 'status', label: 'Status'},
    prioridade: { columnId: 'prioridade', label: 'Prioridade'}
  }


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
  tableConfig = {teste: 'algo'}
  dataSource = ELEMENT_DATA;
  title = 'angular-table';
  ngOnInit(): void {}
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
    status: {value: 'Para Laudar', styles: { background: '#0E830C'}},
    prioridade: {value: '0 - Notório', styles: { background: '#2094ff'}}
  },
  {
    unidade: {value: 'BARRA DOR', idUnidade: 54}, 
    atendimento: {value: 9000040001450974},
    paciente: {value: 'FERNANDO Unid=522 PID=80990'},
    idPaciente: {value: '80990'},
    dataPedido: {value: '2024-05-27T20:39:00.000Z'},
    dataRealizacao: {value: '2024-05-28T22:48:00.000Z'},
    status: {value: 'Para Laudar', styles: { background: '#0E830C'}},
    prioridade: {value: '0 - Notório', styles: { background: '#2094ff'}}
  },
  {
    unidade: {value: 'BARRA DOR', idUnidade: 54}, 
    atendimento: {value: 9900040001450975},
    paciente: {value: 'teste Unid=522 PID=80990'},
    idPaciente: {value: '80991'},
    dataPedido: {value: '2024-05-20T20:39:00.000Z'},
    dataRealizacao: {value: '2024-05-21T22:48:00.000Z'},
    status: {value: 'Para Laudar', styles: { background: '#0E830C'}},
    prioridade: {value: '0 - Notório', styles: { background: '#2094ff'}}
  },
];


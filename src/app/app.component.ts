import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-root',
  styleUrl: './app.component.scss',
  templateUrl: './app.component.html',
})

export class AppComponent implements OnInit {
  displayedColumns:string[] = [
      'unidade', 
      'atendimento',
      'paciente', 
      'idPaciente', 
      'dataPedido',
      'dataRealizacao',
      'status',
      'prioridade']
 
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
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
  }

  // ngAfterViewInit() {
    // this.dataSource.sort = this.sort;
  // }
}

// export interface Element {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }

export interface Element {
  name: any;
  position: any;
  weight: any;
  symbol: any;
}
const ELEMENT_DATA = [
  {
    unidade: {value: 'OSASCO', idUnidade: 510}, 
    atendimento: {value: '9000000177853594'},
    paciente: {value: 'Enrico Unid=510 PID=4628131'},
    idPaciente: {value: '4628131'},
    dataPedido: {value: '2024-05-29T20:39:00.000Z'},
    dataRealizacao: {value: '2024-05-30T20:39:00.000Z'},
    status: {value: 'Para Laudar', background: '#0E830C'},
    prioridade: {value: '0 - Notório', background: '#2094ff'}
  },
  {
    unidade: {value: 'BARRA DOR', idUnidade: 54}, 
    atendimento: {value: '0000040001450974'},
    paciente: {value: 'FERNANDO Unid=522 PID=80990'},
    idPaciente: {value: '80990'},
    dataPedido: {value: '2024-05-27T20:39:00.000Z'},
    dataRealizacao: {value: '2024-05-28T22:48:00.000Z'},
    status: {value: 'Para Laudar', background: '#0E830C'},
    prioridade: {value: '0 - Notório', background: '#2094ff'}
  },
];

// const ELEMENT_DATA: Element[] = [
//   {position: {value: 1, background: '#fff'}, name: {value: 'Hydrogen'}, weight: {value: 1.0079}, symbol: {value: 'H'}},
//   {position: {value: 2, background: '#fff'}, name: {value: 'Helium'}, weight: {value: 4.0026}, symbol: {value: 'HE'}},
// ];

// const ELEMENT_DATA: Element[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];
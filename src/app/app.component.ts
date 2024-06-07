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
 
  displayedColumns:string[] = [
    'unidade', 
    'atendimento',
    'paciente', 
    'idPaciente', 
    'dataPedido',
    'dataRealizacao',
    'status',
    'prioridade',
  ]

  columnsConfig: {[key:string]: any} = {
    unidade: { label: 'Unidade', component: CustomCell}, 
    atendimento: { label: 'Atendimento'},
    paciente:  { label: 'Paciente', component: CustomCell},
    idPaciente:  { label: 'ID Paciente'},
    dataPedido:  { label: 'Data(Pedido)', component: CustomCell},
    dataRealizacao:    { label: 'Data(Realização)', component: CustomCell},
    status:  { label: 'Status'},
    prioridade: { label: 'Prioridade'}
  }
  tableConfig = { rowColor:'#fff', headerColor:'yellow', evenRowBg: '#232222', oddRowBg: '#333', headerBg: '#34495e'}
  dataSource = ELEMENT_DATA;
  title = 'angular-table';
  ngOnInit(): void {}
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
  {
    unidade: {value: 'COPA', idUnidade: 80}, 
    atendimento: {value: 9000040001450901},
    paciente: {value: 'FERNANDO Unid=80 PID=80992'},
    idPaciente: {value: '80992'},
    dataPedido: {value: '2024-05-01T20:39:00.000Z'},
    dataRealizacao: {value: '2024-05-01T22:48:00.000Z'},
    status: {value: 'Liberado', styles: { background: '#1b2759'}},
    prioridade: {value: '0 - Notório', styles: { background: '#2094ff'}}
  },
  {
    unidade: {value: 'COPA', idUnidade: 80}, 
    atendimento: {value: 9000040001450902},
    paciente: {value: 'JOAO Unid=80 PID=80993'},
    idPaciente: {value: '80993'},
    dataPedido: {value: '2024-05-02T20:39:00.000Z'},
    dataRealizacao: {value: '2024-05-02T22:48:00.000Z'},
    status: {value: 'Liberado', styles: { background: '#1b2759'}},
    prioridade: {value: '0 - Notório', styles: { background: '#2094ff'}}
  },
  {
    unidade: {value: 'COPA', idUnidade: 80}, 
    atendimento: {value: 9000040001450903},
    paciente: {value: 'JOAO Unid=80 PID=80994'},
    idPaciente: {value: '80994'},
    dataPedido: {value: '2024-05-03T20:39:00.000Z'},
    dataRealizacao: {value: '2024-05-03T22:48:00.000Z'},
    status: {value: 'Liberado', styles: { background: '#1b2759'}},
    prioridade: {value: '1 - Emergência', styles: { background: '#E02F2F'}}
  },
  {
    unidade: {value: 'NITERÓI', idUnidade: 213}, 
    atendimento: {value: 9000040001450904},
    paciente: {value: 'Maria Unid=213 PID=80995'},
    idPaciente: {value: '80995'},
    dataPedido: {value: '2024-05-05T20:39:00.000Z'},
    dataRealizacao: {value: '2024-05-05T22:48:00.000Z'},
    status: {value: 'Liberado', styles: { background: '#1b2759'}},
    prioridade: {value: '1 - Emergência', styles: { background: '#E02F2F'}}
  },
  {
    unidade: {value: 'NITERÓI', idUnidade: 213}, 
    atendimento: {value: 9000040001450904},
    paciente: {value: 'Maria Unid=213 PID=80995'},
    idPaciente: {value: '80995'},
    dataPedido: {value: '2024-05-05T20:39:00.000Z'},
    dataRealizacao: {value: '2024-05-05T22:48:00.000Z'},
    status: {value: 'Liberado', styles: { background: '#1b2759'}},
    prioridade: {value: '1 - Emergência', styles: { background: '#E02F2F'}}
  },
  {
    unidade: {value: 'NITERÓI', idUnidade: 213}, 
    atendimento: {value: 9000040001450904},
    paciente: {value: 'Maria Unid=213 PID=80995'},
    idPaciente: {value: '80995'},
    dataPedido: {value: '2024-05-05T20:39:00.000Z'},
    dataRealizacao: {value: '2024-05-05T22:48:00.000Z'},
    status: {value: 'Liberado', styles: { background: '#1b2759'}},
    prioridade: {value: '1 - Emergência', styles: { background: '#E02F2F'}}
  },
  {
    unidade: {value: 'NITERÓI', idUnidade: 213}, 
    atendimento: {value: 9000040001450904},
    paciente: {value: 'Maria Unid=213 PID=80995'},
    idPaciente: {value: '80995'},
    dataPedido: {value: '2024-05-05T20:39:00.000Z'},
    dataRealizacao: {value: '2024-05-05T22:48:00.000Z'},
    status: {value: 'Liberado', styles: { background: '#1b2759'}},
    prioridade: {value: '1 - Emergência', styles: { background: '#E02F2F'}}
  },
  {
    unidade: {value: 'NITERÓI', idUnidade: 213}, 
    atendimento: {value: 9000040001450904},
    paciente: {value: 'Maria Unid=213 PID=80995'},
    idPaciente: {value: '80995'},
    dataPedido: {value: '2024-05-05T20:39:00.000Z'},
    dataRealizacao: {value: '2024-05-05T22:48:00.000Z'},
    status: {value: 'Liberado', styles: { background: '#1b2759'}},
    prioridade: {value: '1 - Emergência', styles: { background: '#E02F2F'}}
  },
  {
    unidade: {value: 'NITERÓI', idUnidade: 213}, 
    atendimento: {value: 9000040001450904},
    paciente: {value: 'Maria Unid=213 PID=80995'},
    idPaciente: {value: '80995'},
    dataPedido: {value: '2024-05-05T20:39:00.000Z'},
    dataRealizacao: {value: '2024-05-05T22:48:00.000Z'},
    status: {value: 'Liberado', styles: { background: '#1b2759'}},
    prioridade: {value: '1 - Emergência', styles: { background: '#E02F2F'}}
  },
  {
    unidade: {value: 'NITERÓI', idUnidade: 213}, 
    atendimento: {value: 9000040001450904},
    paciente: {value: 'Maria Unid=213 PID=80995'},
    idPaciente: {value: '80995'},
    dataPedido: {value: '2024-05-05T20:39:00.000Z'},
    dataRealizacao: {value: '2024-05-05T22:48:00.000Z'},
    status: {value: 'Liberado', styles: { background: '#1b2759'}},
    prioridade: {value: '1 - Emergência', styles: { background: '#E02F2F'}}
  },
  {
    unidade: {value: 'NITERÓI', idUnidade: 213}, 
    atendimento: {value: 9000040001450904},
    paciente: {value: 'Maria Unid=213 PID=80995'},
    idPaciente: {value: '80995'},
    dataPedido: {value: '2024-05-05T20:39:00.000Z'},
    dataRealizacao: {value: '2024-05-05T22:48:00.000Z'},
    status: {value: 'Liberado', styles: { background: '#1b2759'}},
    prioridade: {value: '1 - Emergência', styles: { background: '#E02F2F'}}
  },
  {
    unidade: {value: 'NITERÓI', idUnidade: 213}, 
    atendimento: {value: 9000040001450904},
    paciente: {value: 'Maria Unid=213 PID=80995'},
    idPaciente: {value: '80995'},
    dataPedido: {value: '2024-05-05T20:39:00.000Z'},
    dataRealizacao: {value: '2024-05-05T22:48:00.000Z'},
    status: {value: 'Liberado', styles: { background: '#1b2759'}},
    prioridade: {value: '1 - Emergência', styles: { background: '#E02F2F'}}
  },
  {
    unidade: {value: 'NITERÓI', idUnidade: 213}, 
    atendimento: {value: 9000040001450904},
    paciente: {value: 'Maria Unid=213 PID=80995'},
    idPaciente: {value: '80995'},
    dataPedido: {value: '2024-05-05T20:39:00.000Z'},
    dataRealizacao: {value: '2024-05-05T22:48:00.000Z'},
    status: {value: 'Liberado', styles: { background: '#1b2759'}},
    prioridade: {value: '1 - Emergência', styles: { background: '#E02F2F'}}
  },
  {
    unidade: {value: 'NITERÓI', idUnidade: 213}, 
    atendimento: {value: 9000040001450904},
    paciente: {value: 'Maria Unid=213 PID=80995'},
    idPaciente: {value: '80995'},
    dataPedido: {value: '2024-05-05T20:39:00.000Z'},
    dataRealizacao: {value: '2024-05-05T22:48:00.000Z'},
    status: {value: 'Liberado', styles: { background: '#1b2759'}},
    prioridade: {value: '1 - Emergência', styles: { background: '#E02F2F'}}
  },
  {
    unidade: {value: 'QUINTA', idUnidade: 64}, 
    atendimento: {value: 90000400014509020},
    paciente: {value: 'Maria Unid=64 PID=80200'},
    idPaciente: {value: '80200'},
    dataPedido: {value: '2024-05-05T20:39:00.000Z'},
    dataRealizacao: {value: '2024-05-05T22:48:00.000Z'},
    status: {value: 'Entregue', styles: { background: '#39371f'}},
    prioridade: {value: '0 - Notório', styles: { background: '#2094ff'}}
  },
  {
    unidade: {value: 'QUINTA', idUnidade: 64}, 
    atendimento: {value: 90000400014509020},
    paciente: {value: 'Maria Unid=64 PID=80200'},
    idPaciente: {value: '80200'},
    dataPedido: {value: '2024-05-05T20:39:00.000Z'},
    dataRealizacao: {value: '2024-05-05T22:48:00.000Z'},
    status: {value: 'Entregue', styles: { background: '#39371f'}},
    prioridade: {value: '0 - Notório', styles: { background: '#2094ff'}}
  },
  {
    unidade: {value: 'QUINTA', idUnidade: 64}, 
    atendimento: {value: 90000400014509020},
    paciente: {value: 'Maria Unid=64 PID=80200'},
    idPaciente: {value: '80200'},
    dataPedido: {value: '2024-05-05T20:39:00.000Z'},
    dataRealizacao: {value: '2024-05-05T22:48:00.000Z'},
    status: {value: 'Entregue', styles: { background: '#39371f'}},
    prioridade: {value: '0 - Notório', styles: { background: '#2094ff'}}
  },
  {
    unidade: {value: 'QUINTA', idUnidade: 64}, 
    atendimento: {value: 90000400014509020},
    paciente: {value: 'Maria Unid=64 PID=80200'},
    idPaciente: {value: '80200'},
    dataPedido: {value: '2024-05-05T20:39:00.000Z'},
    dataRealizacao: {value: '2024-05-05T22:48:00.000Z'},
    status: {value: 'Entregue', styles: { background: '#39371f'}},
    prioridade: {value: '0 - Notório', styles: { background: '#2094ff'}}
  },
  {
    unidade: {value: 'QUINTA', idUnidade: 64}, 
    atendimento: {value: 90000400014509020},
    paciente: {value: 'Maria Unid=64 PID=80200'},
    idPaciente: {value: '80200'},
    dataPedido: {value: '2024-05-05T20:39:00.000Z'},
    dataRealizacao: {value: '2024-05-05T22:48:00.000Z'},
    status: {value: 'Entregue', styles: { background: '#39371f'}},
    prioridade: {value: '0 - Notório', styles: { background: '#2094ff'}}
  },
  {
    unidade: {value: 'QUINTA', idUnidade: 64}, 
    atendimento: {value: 90000400014509020},
    paciente: {value: 'Maria Unid=64 PID=80200'},
    idPaciente: {value: '80200'},
    dataPedido: {value: '2024-05-05T20:39:00.000Z'},
    dataRealizacao: {value: '2024-05-05T22:48:00.000Z'},
    status: {value: 'Entregue', styles: { background: '#39371f'}},
    prioridade: {value: '0 - Notório', styles: { background: '#2094ff'}}
  },
];


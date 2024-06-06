import { MatTableDataSource } from '@angular/material/table';
import { Component, Injector, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-generic-table',
  styleUrl: './generic-table.component.scss',
  templateUrl: './generic-table.component.html',
})

export class GenericTable implements OnInit {
    
    @Input() columnsDefinition!:  {[key:string]: any};
    @Input() displayedColumns!: string[]; 
    @Input() columnLabels!: {[key:string]: string}; 
    @Input() columnsConfig!: any[];
    @Input() tableConfig!: any;
    @Input() dataSource!: any[];
    
    @ViewChild(MatSort) sort!: MatSort;

    evenRowColor: string = '#232222'; //tableConfig
    oddRowColor: string = '#333'; //tableConfig
    tableDataSource!: MatTableDataSource<any>;

  ngOnInit(): void {
    this.tableDataSource = new MatTableDataSource(this.dataSource);
  }

  ngAfterViewInit() {
    this.tableDataSource.sort = this.sort as any;
    this.tableDataSource.sortingDataAccessor = (data: any, sortHeaderId: string) => {
        const value = data[sortHeaderId].value;
        // Se o valor for do tipo string, converta para minúsculo para garantir uma ordenação correta
        return typeof value === 'string' ? value.toLowerCase() : value;
      };
  }

  createInjector(data: any): Injector {
    // console.info('Injecting...', data.value)
    return Injector.create({
      providers: [
        { provide: 'data', useValue: data.value }
      ]
    });
  }
}
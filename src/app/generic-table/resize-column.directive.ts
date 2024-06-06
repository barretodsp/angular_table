import { Directive, ElementRef, Renderer2, OnInit, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appColumnResize]'
})
export class ColumnResizeDirective implements OnInit {
  @Input('appColumnResize') columnId!: string;
  @Input() index!: number;
  private startX!: number;
  private startWidth!: number;
  private column!: HTMLElement;
  private table!: HTMLElement;
  private pressed!: boolean;
  //   private unlistenerMove!: () => void;
  //   private unlistenerUp!: () => void;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.column = this.el.nativeElement;
  }

    ngOnInit() {
        const row = this.renderer.parentNode(this.column);
        const thead = this.renderer.parentNode(row);
        this.table = this.renderer.parentNode(thead);

        const resizer = this.renderer.createElement("span");
        this.renderer.addClass(resizer, "resize-handle");
        this.renderer.appendChild(this.column, resizer);

        this.renderer.listen(resizer, "mousedown", this.onMouseDown);
        this.renderer.listen(this.table, "mousemove", this.onMouseMove);
        this.renderer.listen("document", "mouseup", this.onMouseUp);
        
        console.log('Column log', this.column)
        console.log('INDEX log', this.index)

        //--------------------
        // const resizer = this.renderer.createElement('div');
        // this.renderer.addClass(resizer, 'resize-handle');
        // this.renderer.appendChild(this.column, resizer);
    }

    onMouseDown = (event: MouseEvent) => {
        this.pressed = true;
        this.startX = event.pageX;
        this.startWidth = this.column.offsetWidth;
    };
    
    onMouseMove = (event: MouseEvent) => {
    const offset = 35;
    if (this.pressed && event.buttons) {
        this.renderer.addClass(this.table, "resizing");

        // Calculate width of column
        let width = this.startWidth + (event.pageX - this.startX - offset);

        const tableCells = Array.from(this.table.querySelectorAll(".wl-mat-row")).map(
        (row: any) => row.querySelectorAll(".wl-mat-cell").item(this.index)
        );

        // Set table header width
        this.renderer.setStyle(this.column, "width", `${width}px`);

        // Set table cells width
        for (const cell of tableCells) {
        this.renderer.setStyle(cell, "width", `${width}px`);
        }
    }
    };

    onMouseUp = (event: MouseEvent) => {
        if (this.pressed) {
            this.pressed = false;
            this.renderer.removeClass(this.table, "resizing");
        }
    };

    // this.renderer.listen(resizer, 'mousedown', (event) => {
    //   event.preventDefault();
    //   this.startResize(event);
    // });
}
//   private startResize(event: MouseEvent) {
//     this.startX = event.pageX;
//     this.startWidth = this.el.nativeElement.offsetWidth;

//     this.unlistenerMove = this.renderer.listen('document', 'mousemove', (event: MouseEvent) => {
//       this.onResize(event);
//     });

//     this.unlistenerUp = this.renderer.listen('document', 'mouseup', () => {
//       this.stopResize();
//     });
//   }

//   private onResize(event: MouseEvent) {
//     const delta = event.pageX - this.startX;
//     const newWidth = this.startWidth + delta;

//     if (newWidth > 20) { // Limiting minimum width
//       this.renderer.setStyle(this.el.nativeElement, 'width', newWidth + 'px');
//     }
//   }

//   private stopResize() {
//     this.unlistenerMove()
//     this.unlistenerUp()
//   }
// }

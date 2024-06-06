import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-custom-cell',
  template: `<span>{{ data }} HAHA</span>`,
})

export class CustomCell {
  constructor(@Inject('data') public data: any) {}
}
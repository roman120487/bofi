import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'brend'
})
export class BrendPipe implements PipeTransform {

  transform(value: any[], brendVal: string): any {
    if (!value) { return []; }
    if (brendVal === '') { return value; }
    // if (value) { return value; }
    return value.filter(function (val) {
      if (val.brandName === brendVal) {
        return val;
      }
    })
  }

}

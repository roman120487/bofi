import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'type'
})
export class TypePipe implements PipeTransform {

  transform(value: any[], typeVal: string): any {
    if (!value) { return []; }
    if (typeVal === '') { return value; }
    // if (value) { return value; }
    return value.filter(function(val) {
      if (val.type === typeVal) {
        return val;
      }
    });
  }
}

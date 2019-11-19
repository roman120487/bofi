import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'power'
})
export class PowerPipe implements PipeTransform {

  transform(value: any[], powerVal: string): any {
    if (!value) { return []; }
    if (powerVal === '') { return value; }
    // if (value) { return value; }
    return value.filter(function (val) {
      if (val.power === powerVal) {
        return val;
      }
    })
  }

}

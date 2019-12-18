import { Pipe, PipeTransform } from '@angular/core';
import { ArrayType } from '@angular/compiler';

@Pipe({
  name: 'power',
  pure: false
})
export class PowerPipe implements PipeTransform {

  transform(value: any[], masPowerFilter: any[]): any {
    return value;
    if (!value) { return []; }
    if (masPowerFilter == []) { return value; }
    // if (value) { return value; }
    // return value.filter(function (val) {
    //   if (val.power === masPowerFilter) {
    //     return val;
    //   }
    // })
  }

}

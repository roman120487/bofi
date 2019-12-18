import { Pipe, PipeTransform } from '@angular/core';
import { ArrayType } from '@angular/compiler';

@Pipe({
  name: 'power',
  pure: false
})
export class PowerPipe implements PipeTransform {

  transform(value: any[], masPowerFilter: string[]): any {
    // if (!value) { return []; }
    if (masPowerFilter.length === 0) { return value; }
    // if (value) { return []; }
    return value.filter(function (val) {
      
    // не працює церез forEach
      // masPowerFilter.forEach(elem => {
      //   if (val.power === elem) {
      //         return val;
      //       }
      // });

      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < masPowerFilter.length; i++) {
        if (val.power === masPowerFilter[i]) {
          return val;
        }
      }
    });
  }

}

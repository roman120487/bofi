import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'brend',
  pure: false
})
export class BrendPipe implements PipeTransform {

  transform(value: any[], masBrendFilter: string[]): any {
    // if (!value) { return []; }
    if (masBrendFilter.length === 0) { return value; }
    // if (value) { return []; }
    return value.filter(function (val) {
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < masBrendFilter.length; i++) {
        if (val.brandName === masBrendFilter[i]) {
          return val;
        }
      }
    })
  }

}

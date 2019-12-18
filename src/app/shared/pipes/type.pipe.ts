import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'type',
  pure: false
})
export class TypePipe implements PipeTransform {

  transform(value: any[], masTypeFilter: string[]): any {
    // if (!value) { return []; }
    if (masTypeFilter.length === 0) { return value; }
    // if (value) { return []; }
    return value.filter(function (val) {
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < masTypeFilter.length; i++) {
        if (val.type === masTypeFilter[i]) {
          return val;
        }
      }
    })
  }
}

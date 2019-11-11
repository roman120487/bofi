import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'air'
})
export class AirPipe implements PipeTransform {

  transform(value: any[]): any {
    // if (value) { return value; }
    return value.filter(function (val) {
      if(val.category === 'airsystems'){
        return val;
      }
    })
  }
}

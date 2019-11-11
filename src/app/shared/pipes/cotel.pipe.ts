import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cotel'
})
export class CotelPipe implements PipeTransform {
  transform(value: any[]): any {
    // if (value) { return value; }
    return value.filter(function (val) {
      if(val.category === 'opalenya'){
        return val;
      }
    })
  }

}

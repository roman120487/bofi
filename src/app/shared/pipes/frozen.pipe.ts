import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'frozen'
})
export class FrozenPipe implements PipeTransform {

  transform(value: any[]): any {
    // if (value) { return value; }
    return value.filter(function (val) {
      if(val.category === 'frozensystems'){
        return val;
      }
    })
  }

}

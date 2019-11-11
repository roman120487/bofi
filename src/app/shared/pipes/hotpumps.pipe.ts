import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hotpumps'
})
export class HotpumpsPipe implements PipeTransform {

  transform(value: any[]): any {
    // if (value) { return value; }
    return value.filter(function (val) {
      if(val.category === 'hotpumps'){
        return val;
      }
    })
  }

}

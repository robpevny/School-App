import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalization',
  standalone: false
})
export class CapitalizationPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    //if value is not truth, return it
    if(!value){
      return value;
    }
    // capitalizer the first letter and concanatinate with rest
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

}

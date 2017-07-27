import {Pipe, PipeTransform} from "@angular/core";

@Pipe({name:'reverseText'})
export class ReversePipe implements PipeTransform{

  transform(value: string): any {
    if(!value)
    {
      return value;
    }

    return value.split('').reverse().join('');
  }

}

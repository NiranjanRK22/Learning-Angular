import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'title'
})
export class TitlePipe implements PipeTransform {

  transform(value: string, gender: string): any {
    if (gender == "f")
    return 'Miss '.concat(value);
    else if (gender == "m")
    return 'Mr '.concat(value);
    else 
    return value;
  }

}

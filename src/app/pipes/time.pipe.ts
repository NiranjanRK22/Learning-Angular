import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(date: any, type?: string): any {
    if (type == "h")
      // return `Hour: ${date.substring(11, 13)}`;
      return `Hour: ${date.getHours()}`;
    else if (type == "m")
      // return `Minute: ${date.substring(14, 16)}`;
      return `Minute: ${date.getMinutes()}`;
    else if (type == "s")
      return `Seconds: ${date.getSeconds()}`;
    else if (type == "d")
      return `Day: ${date.substring(8, 10)}`;
    else if (type == "mm")
      return `Month: ${date.substring(5, 7)}`;
    else if (type == "y")
      return `Year: ${date.substring(0, 4)}`;
    else if (type == "dd")
      return `Date: ${date.substring(0, 10)}`;
    else if (type == "dt")
      return `Date and Time: ${date.substring(0, 10)} ${date.substring(12, 19)}`;
    
      
  }

}

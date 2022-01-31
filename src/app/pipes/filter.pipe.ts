import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(inputArray: any[], propertyName: string, details: string): any[] {
    let outputArray:any= [];
    if (!details)
      return inputArray;
    inputArray.forEach(obj => {
      if (obj[propertyName] == details)
        outputArray.push(obj);
    })
    return outputArray;
  }

}

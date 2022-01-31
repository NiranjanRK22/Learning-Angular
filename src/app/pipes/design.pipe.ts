import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'design'
})
export class DesignPipe implements PipeTransform {

  transform(value: string, type?: any): string {
    if (type)
        return value.concat(type);
    
    return value.concat('!!!');
    
  }

}

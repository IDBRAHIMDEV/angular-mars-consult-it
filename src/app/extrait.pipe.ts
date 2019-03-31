import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class ExtraitPipe implements PipeTransform {

  transform(value: string, limit?: number): any {

    let myLimit = limit ? limit : 10;
    return value.substr(0, myLimit) + '...';
  }

}

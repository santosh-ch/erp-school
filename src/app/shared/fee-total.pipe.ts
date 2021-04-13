import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'feeTotal'
})
export class FeeTotalPipe implements PipeTransform {

  transform(value: string, ...args: string[]): number {
    return ( parseInt(args[0]) + (4) * parseInt(args[1]));
  }

}

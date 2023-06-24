import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'avatar',
})
export class AvatarPipe implements PipeTransform {
  transform(value: string, ...args: string[]): string {
    return `${value.split(' ')[0].slice(0, 1)}. ${value
      .split(' ')[1]
      .slice(0, 1)}.`;
  }
}

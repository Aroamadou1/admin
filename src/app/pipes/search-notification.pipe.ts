import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchNotification'
})
export class SearchNotificationPipe implements PipeTransform {

  transform(value: any[], args: string): any {
    if (!value) return [];
    if (!args) return value;
    return value.filter(
      item => item.message.toLowerCase().includes(args.toLowerCase()) || item.created_at.includes(args)
    );
  }

}

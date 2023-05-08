import { Pipe, PipeTransform } from '@angular/core';
import * as routes from '../../constant/absolute-routes'
@Pipe({
  name: 'absoluteRouting'
})
export class AbsoluteRoutingPipe implements PipeTransform {

  transform(route:any,id?:any) {
    try {
      if (id) {
      // @ts-ignore
        return Array.isArray(id)?routes[route].fullUrl(...id):routes[route].fullUrl(id);

      }
      // @ts-ignore: Unreachable code error

      return routes[route].fullUrl;
    } catch {
      return '';
    }
  }

}

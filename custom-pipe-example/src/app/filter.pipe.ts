import { Pipe, PipeTransform } from '@angular/core';
import { empty } from 'rxjs';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, sName:string): any {
    if(sName ===""){
      return value;
    }
    const playersArray: any[]=[];
    for(let i=0;i<=value.length;i++){
      let teamName: string = value[i].team;
      if(teamName.startsWith(sName)){
        playersArray.push(value[i]);
      }
    }
    
    return playersArray;
  }

}

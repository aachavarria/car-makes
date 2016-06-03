import {Pipe} from "@angular/core";

@Pipe({
    name:"search"
})
export class SearchPipe{
    transform(value,term?){
        if(term){
            return value.filter((item)=> item.name.toLowerCase().startsWith(term.toLowerCase()));
        }else{
            return value;
        }
    }
}

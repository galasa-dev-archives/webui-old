import { DefaultApi } from 'galasa-ras-api-ts-rxjs';

import { Observable, of } from 'rxjs';
import { map, first, concatAll, concatMap } from 'rxjs/operators';

export class ApiHandler{
    
    private rasApi = new DefaultApi();

    constructor(){
        
    }

    public getRequestors(){

        
    }
    
}



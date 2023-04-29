import {Injectable} from "@angular/core";
import {Subject} from "rxjs";

import {eventState} from "../state/product.state";

@Injectable({providedIn:"root"})
export class eventDriverService{


  sourceEvenSubject:Subject<eventState> = new Subject<eventState>();

  sourceEvenSubjectObserveble=this.sourceEvenSubject.asObservable();

  publishEvent(event:eventState){

    this.sourceEvenSubject.next(event);

  }


}

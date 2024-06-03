import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AxiosService {
  constructor() {}

  getData(url: string): Observable<any> {
    return new Observable((observer) => {
      axios
        .get(url)
        .then((response) => {
          observer.next(response.data);
          observer.complete();
        })
        .catch((error) => {
          observer.error(error);
        });
    });
  }

  login(url: string, credentials: any): Observable<any> {
    return new Observable((observer) => {
      axios.post(url, credentials).then((response) => {
        observer.next(response.data);
        observer.complete();
      }).catch((error) => {
        observer.error(error);
      });
    });
  }
}

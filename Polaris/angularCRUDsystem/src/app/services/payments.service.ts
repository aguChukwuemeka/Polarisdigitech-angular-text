import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PaymentsService {

  private paymentUrl = "https://jsonplaceholder.typicode.com/todos"

  constructor(private http: HttpClient) { }

  getAllPayment(): Observable<any[]> {
    return this.http.get<any[]>(this.paymentUrl).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse): Observable<any> {
    let errMsg = '';
    if (err.error instanceof ErrorEvent) {
      errMsg = `An error occurred: ${err.error.message}`;
    } else {
      errMsg = `Server returned code: ${err.status}, error message is is ${err.message}`;
    }
    console.error(errMsg);
    return throwError(errMsg);
  }

}

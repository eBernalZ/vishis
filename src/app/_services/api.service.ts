import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = "https://novus-api.onrender.com/";
  httpOptions = {
    headers: new HttpHeaders({
      "Accept": "application/json",
    })
  };
  constructor(private http: HttpClient) { }
  
  getPipe(path:string) {
    return this.http.get(this.baseUrl + path, this.httpOptions).pipe(catchError(this.errorHandler));
  }

  putPipe(path:string, request:any) {
    return this.http.put<any>(this.baseUrl + path, request, this.httpOptions).pipe(catchError(this.errorHandler));
  }
  
  postPipe(path:string, request:any) {
    return this.http.post<any>(this.baseUrl + path, request, this.httpOptions).pipe(catchError(this.errorHandler));
  }

  deletePipe(path:string) {
    return this.http.delete(this.baseUrl + path, this.httpOptions).pipe(catchError(this.errorHandler));
  }

  loginPipe(request:any) {
    return this.http.post<JSON>(this.baseUrl + "auth/login", request).pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "Server Error");
  }
}
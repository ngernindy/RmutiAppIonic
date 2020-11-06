import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CDService {
  // apiUrl = 'http://localhost/WebProject/API_CD.php';
  // apiUrl = 'http://192.168.1.107/WebProject/API_CD.php';
  // apiUrl = 'http://172.26.107.231/WebProject/API_CD.php';//เรียกที่อยู่ API


  constructor(private http: HttpClient) { }

  // getCD(): Observable<CD> {
  //   return this.http.get<CD>(this.apiUrl);
  //   }
}

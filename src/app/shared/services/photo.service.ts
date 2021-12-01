import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private httpClient: HttpClient) { 
    
  }

  public getPhotos(): Observable<any> {
    return this.httpClient.get<any>(`${environment.url_base}/photos/?client_id=${environment.accessKey}`)
  }
}

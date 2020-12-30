import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pluck } from 'rxjs/operators';

interface UnsplashResponse { 
  urls: {
    regular: string
  }
}

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http: HttpClient) { }

  getPhoto() {
    return this.http.get<UnsplashResponse>('https://api.unsplash.com/photos/random', {
      headers: {
        Authorization: 'Client-ID cviHxYrJq2pgevr9q1zViSCo8iRNvbaQlwhpLdo_UBk'
      }
    }).pipe(
      pluck('urls', 'regular')
    )
  }
}

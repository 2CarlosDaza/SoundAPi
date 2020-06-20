import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JsonService {

  constructor(private http: HttpClient) { }

  item:any;
  tracks=[];

  url='http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=b284db959637031077380e7e2c6f2775&format=json';
  getJson(){
    return this.http.get(this.url);
  }
  magia(){
    this.getJson().subscribe((res:any)=>{
      console.log(res);
      this.item=res["tracks"];
      this.tracks=this.item["track"];
    });
    return this.tracks;
  }
  getById(songName){
    return {...this.magia().find(any => any["name"] == songName)};
  }
}

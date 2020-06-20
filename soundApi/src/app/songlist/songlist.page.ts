import { JsonService } from './../json.service';
import { Component, OnInit } from '@angular/core';
import {song} from './song';

@Component({
  selector: 'app-songlist',
  templateUrl: './songlist.page.html',
  styleUrls: ['./songlist.page.scss'],
})
export class SonglistPage implements OnInit {
  
  constructor(public json: JsonService) {
    
   }
   item:any;
   tracks=[];
   songs:song[];

   fetchSongs(){
    this.tracks.forEach(element=>{
      let song={title:element['name'],listeners:element['listeners'],count:element['playcount']}
      this.songs.push(song);
    }); 
  
   }

  ngOnInit() {
      this.json.getJson().subscribe((res:any)=>{
      console.log(res);
      this.item=res["tracks"];
      this.tracks=this.item["track"];
      this.fetchSongs();
    });
    
  }

}

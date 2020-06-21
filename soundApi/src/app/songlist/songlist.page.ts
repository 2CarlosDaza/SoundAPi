import { JsonService } from './../json.service';
import { Component, OnInit } from '@angular/core';
import {song} from './song';
import {Router} from '@angular/router';

@Component({
  selector: 'app-songlist',
  templateUrl: './songlist.page.html',
  styleUrls: ['./songlist.page.scss'],
})
export class SonglistPage implements OnInit {
  
  constructor(public json: JsonService,
              private router: Router) {}
   tracks: any;
   track = [];
   
   ArrayImage = [];
   imagen = [];

    artist = [];
    artistName = [];
/*
   fetchSongs(){
    this.tracks.forEach(element=>{
      let song={title: element['name'],listeners:element['listeners'],count:element['playcount']}
      this.songs.push(song);
    }); 
    */
   

   details(name: string, listeners: string, playcount: string, image: string, oie: string){
      localStorage.setItem('name', name);
      localStorage.setItem('listeners', listeners);
      localStorage.setItem('image', image);
      localStorage.setItem('count', playcount);
      localStorage.setItem('artist', oie);
      this.router.navigate(['/song-detail']);
   }


  ngOnInit() {
      this.json.getJson().subscribe((res) => {
      console.log(res);
      this.tracks = res["tracks"];
      this.track = this.tracks["track"];
      this.ArrayImage = this.track[0]["image"];
      this.imagen = this.ArrayImage[3]["#text"];
      this.artist = this.track["artist"]["name"];
      console.log(this.track[0]["image"]);
    },(error)=>{
      console.log("error al consultar la api")
    });
  }

}

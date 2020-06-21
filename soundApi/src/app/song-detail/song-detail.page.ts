import { JsonService } from './../json.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';
@Component({
  selector: 'app-song-detail',
  templateUrl: './song-detail.page.html',
  styleUrls: ['./song-detail.page.scss'],
})
export class SongDetailPage implements OnInit {

  name: string;
  count: string;
  listeners: string;
  image: string;
  artist: string;

  constructor(private router:Router) { }

  ngOnInit() {
    this.get();
  }

  get(){
    if ( localStorage.getItem('name') != null){
        this.name = localStorage.getItem('name');
        localStorage.removeItem("name");
        this.listeners = localStorage.getItem('listeners');
        localStorage.removeItem("listeners");
        this.image = localStorage.getItem('image');
        console.log(this.image);
        localStorage.removeItem("image");
        this.count = localStorage.getItem('count');
        localStorage.removeItem("count");//por alguna razon da problemas cuando escribo playcount
        this.artist = localStorage.getItem('artist');
        localStorage.removeItem('artist');

    }
  }
}

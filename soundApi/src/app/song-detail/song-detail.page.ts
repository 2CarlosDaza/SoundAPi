import { JsonService } from './../json.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-song-detail',
  templateUrl: './song-detail.page.html',
  styleUrls: ['./song-detail.page.scss'],
})
export class SongDetailPage implements OnInit {
  currentSong:any;
  constructor(private JsonService:JsonService,
              private ActivatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.ActivatedRoute.paramMap.subscribe(paramMap=>{
        if(!paramMap.has('songId')){
          return;
        }
        const songId=paramMap.get('name');
        this.currentSong=JsonService.getById(songId);
    });
  }

}

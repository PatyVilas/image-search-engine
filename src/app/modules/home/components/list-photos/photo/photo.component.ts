import { Component, Input, OnInit } from '@angular/core';

import { Photo } from '@shared/interfaces/photo';


@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  @Input()
  public photo: Photo;

  constructor() {
    this.photo = {
      id: '',
      created_at: '',
      description: '',
      likes: 1,
      user: {id:'', username: ''},
      urls: { full: '', regular: '' }
    }
  }

  ngOnInit(): void {
    console.log(this.photo);
    
  }

  
}

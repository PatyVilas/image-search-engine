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
      alt_description: '',
      likes: 1,
      user: {id:'', username: '', name: '', profile_image: {small: '', medium: '', large: ''}},
      urls: { full: '', regular: '' }
    }
  }

  ngOnInit(): void {
    console.log(this.photo);
    
  }
  
}

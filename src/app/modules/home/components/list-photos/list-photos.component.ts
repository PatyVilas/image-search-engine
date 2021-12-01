import { PhotoService } from './../../../../shared/services/photo.service';
import { Component, OnInit } from '@angular/core';
import { Photo } from '@shared/interfaces/photo';

@Component({
  selector: 'app-list-photos',
  templateUrl: './list-photos.component.html',
  styleUrls: ['./list-photos.component.css']
})
export class ListPhotosComponent implements OnInit {

  public listPhotos: Photo[];

  constructor(private photoService: PhotoService) {
    this.listPhotos = []
   }

  ngOnInit(): void {
    this.toListPhotos();
  }

  private toListPhotos(): void {
    this.photoService.getPhotos().subscribe((photos: Photo[]) => {
      this.listPhotos = [ ...photos]
    },
      (error: Error) => {
      console.error('Error in photo service', error);
      },
      () => {
        console.log('Response ok in photo service',);
        return this.listPhotos;
      })
    
  }
}

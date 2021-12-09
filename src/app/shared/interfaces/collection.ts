import { Photo } from "./photo";
import { User } from "./user";

export interface Collection {
    id: string,
    title: string,
    description: string,
    total_photos: number,
    user: User,
    published_at: string,
    cover_photo: Photo
}

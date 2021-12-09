import { User } from "./user"

export interface Photo {
    id: string,
    created_at: string,
    description: string,
    alt_description: string,
    likes: number,
    user: User,
    urls: {full: string, regular: string}
}

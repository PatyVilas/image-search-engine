export interface Photo {
    id: string,
    created_at: string,
    description: string,
    likes: number,
    user: {id: string, username: string },
    urls: {full: string, regular: string}
}

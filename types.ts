export interface Music {
  song_id: number,
  is_favorite: boolean,
  downloadable: boolean,
  song_art: string,
  title: string,
  duration: number,
  artist: { name: string, artist_id: number },
  album: { name: string, album_id: number },
}

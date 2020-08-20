import { Observable } from 'rxjs';
export interface IVideogame {
  constructor();
  title: string,
  genre: string,
  publisher: string,
  release: number
  reviewScore: number
}

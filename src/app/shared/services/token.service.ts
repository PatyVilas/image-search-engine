import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private token: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private userName: BehaviorSubject<string> = new BehaviorSubject<string>('');

  public token$: Observable<number> = this.token.asObservable();
  public userName$: Observable<string> = this.userName.asObservable();

  public setToken(token: number): void {
    this.token.next(token);
  }

  public setUser(user: string): void {
    this.userName.next(user);
  }
}

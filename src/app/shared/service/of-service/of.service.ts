import { Injectable } from '@angular/core';
import { filter, map, Observable } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root'
})
export class OfService {

  of$ : Observable<number[]> = of([1,2,4,5,6,7,8,9,10,11,12,13,14,15,16,17,19,20])

  ofEven$ = this.of$.pipe(
    map(arr => arr.filter(a => a% 2 === 0))
  )

  off$ : Observable<number[]> = of([1,2,4,5,6,7,8,9,10,11,12,13,14,15,16,17,19,20])

  ofOdd$ = this.off$.pipe(
    map(arr => arr.filter(t => t % 2 !== 0))
  )

  offf$ : Observable<number[]> = of([1,2,4,5,6,7,8,9,10,11,12,13,14,15,16,17,19,20])
  ofNum$ = this.offf$.pipe(
    map(arr => arr.filter(e => e >= 5 && e <= 10))
  )

  ofD$ : Observable<number[]> = of([1,2,4,5,6,7,8,9,10,11,12,13,14,15,16,17,19,20])
  ofDiv = this.ofD$.pipe(
    map(arr => arr.filter(o => o % 3 === 0))
  )

  cars$ : Array<string> = ['Pagani', 'BMW M5', 'Rolls Royce', 'Porsche']

  car$ = of(this.cars$)

  colors : Array<string> = ['Green','Emerald Green','Mint Green','Bottle Green','Olive Green']
  colors$ = of(this.colors)

  constructor() { }
}

import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { catchError, map, Observable, of, tap, throwError } from 'rxjs';
import { Excercise } from '../interfaces/excercise.interface';

const URL = 'http://localhost:3000'

@Injectable({
  providedIn: 'root'
})
export class ExcericiseService {

  private http = inject(HttpClient);

  private actualQuery = signal<string>('')

  loadExcersice( query: string): Observable<Excercise[]> {
    this.actualQuery.set(query);

    return this.http.get<Excercise[]>(`${ URL }/${ query }`)
    .pipe(
      catchError( err => {
        console.log('Error', err);

        return throwError( () => {
          new Error( `No se encontro ejericisio con query ${ query }`)
        })
      })
    )
  };

  searchByCode( code: number ): Observable<Excercise | undefined> {

    return this.http.get<Excercise>( `${ URL }/${this.actualQuery()}/${code}`)
    .pipe(
      map( excercise => excercise ),
      catchError( err => {
          console.log('Error al cargar Data', err);

          return throwError( () =>
            new Error(`No se encontraron paises con query ${ code }`
            ))
        })
    )
  }

}

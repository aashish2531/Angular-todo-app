import { InMemoryDbService } from 'angular-in-memory-web-api';
import { List } from './list';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const lists = [
      {  task: 'Dr Nice' },
      {  task: 'Narco' },
      {  task: 'Bombasto' },
      {  task: 'Celeritas' },
      {  task: 'Magneta' },
      {  task: 'RubberMan' },
      {  task: 'Dynama' },
      {  task: 'Dr IQ' },
      {  task: 'Magma' },
      {  task: 'Tornado' }
    ];
    return {lists};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  // genId(lists: List[]): number {
  //   return lists.length > 0 ? Math.max(...lists.map(list => list.id)) + 1 : 11;
  // }
}
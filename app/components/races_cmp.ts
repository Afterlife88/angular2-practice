import {Component} from '@angular/core';

@Component({
    selector: 'ns-races',
    template: `<div *ngIf="races.length > 0">
    <h2>Races</h2>
    <ul>
    <li *ngFor="let race of races">{{race.name}}</li>
    </ul>
    </div>`
})
export class RacesComponent {
   races: Array<any> = [{ name: 'London' }, { name: 'Lyon' }];
}
import {Component} from '@angular/core';
import {RacesComponent} from './races_cmp';
import {PoniesComponent} from './ponies_cmp';

@Component({
    selector: 'ponyracer-app',
    template: `
    <h1>PonyRacer</h1>
    <ns-ponies></ns-ponies>`,
    directives: [RacesComponent, PoniesComponent]
})
export class PonyRacerAppComponent {
    onNewRace() {
       console.log('boom');
    }
}
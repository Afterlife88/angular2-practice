import {Component} from '@angular/core';
import {RacesComponent} from './races_cmp';
import {PoniesComponent} from './ponies_cmp';
import {RaceService} from '../services/race-service';
@Component({
    selector: 'ponyracer-app',
    template: `
    <h1>PonyRacer</h1>
    <ns-ponies></ns-ponies>`,
    directives: [RacesComponent, PoniesComponent]
})
export class PonyRacerAppComponent {
    constructor(private raceService: RaceService) {

    }
    list() {
        return this.raceService.list();
    }
}
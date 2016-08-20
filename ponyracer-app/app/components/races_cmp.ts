import {Component} from '@angular/core';
import {RaceService} from '../services/race-service'
import {FakeRaceService} from '../bootstrap'

@Component({
    selector: 'ns-races',
    template: `<strong>Races list</strong>`,
    providers: [{ provide: RaceService, useClass: FakeRaceService }]
})
export class RacesComponent {
    constructor(private raceService: RaceService) {

    }

    list() {
        return this.raceService.list();
    }

}
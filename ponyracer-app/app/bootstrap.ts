import {bootstrap} from '@angular/platform-browser-dynamic';
import {PonyRacerAppComponent} from './components/ponyracer-app.component';
import {HTTP_PROVIDERS} from '@angular/http';
import {RaceService} from './services/race-service';
import {Observable} from 'rxjs/Rx';
import {Http} from '@angular/http';

const IS_PROD = false;
bootstrap(PonyRacerAppComponent, [HTTP_PROVIDERS,
    { provide: 'RaceServiceToken', useClass: RaceService },
    // let's add another token this time using `useExisting`
    { provide: RaceService, useExisting: 'RaceServiceToken' }])


export class FakeRaceService {
    list() {
        return Observable.of([{ name: 'London' }]);
    }
}
function playWithInjector(inj) {
    console.log(inj.get(RaceService));
    // logs "RaceService {http: Http}"
    // same as we had before
    console.log(inj.get('RaceServiceToken'));
    // logs "RaceService {http: Http}" again
    // same as we had before
    console.log(inj.get(RaceService) === inj.get(RaceService));
    // logs "true", as the same instance is returned every time for a token
    // same as we had before
    console.log(inj.get('RaceServiceToken') === inj.get(RaceService));
    // logs "true", as the second provider is for an existing token,
    // so there is just one instance
    // where it was "false" when using `useClass`
}
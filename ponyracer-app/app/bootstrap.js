"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var ponyracer_app_component_1 = require('./components/ponyracer-app.component');
var http_1 = require('@angular/http');
var race_service_1 = require('./services/race-service');
var Rx_1 = require('rxjs/Rx');
var IS_PROD = false;
platform_browser_dynamic_1.bootstrap(ponyracer_app_component_1.PonyRacerAppComponent, [http_1.HTTP_PROVIDERS,
    { provide: 'RaceServiceToken', useClass: race_service_1.RaceService },
    // let's add another token this time using `useExisting`
    { provide: race_service_1.RaceService, useExisting: 'RaceServiceToken' }]);
var FakeRaceService = (function () {
    function FakeRaceService() {
    }
    FakeRaceService.prototype.list = function () {
        return Rx_1.Observable.of([{ name: 'London' }]);
    };
    return FakeRaceService;
}());
exports.FakeRaceService = FakeRaceService;
function playWithInjector(inj) {
    console.log(inj.get(race_service_1.RaceService));
    // logs "RaceService {http: Http}"
    // same as we had before
    console.log(inj.get('RaceServiceToken'));
    // logs "RaceService {http: Http}" again
    // same as we had before
    console.log(inj.get(race_service_1.RaceService) === inj.get(race_service_1.RaceService));
    // logs "true", as the same instance is returned every time for a token
    // same as we had before
    console.log(inj.get('RaceServiceToken') === inj.get(race_service_1.RaceService));
    // logs "true", as the second provider is for an existing token,
    // so there is just one instance
    // where it was "false" when using `useClass`
}
//# sourceMappingURL=bootstrap.js.map
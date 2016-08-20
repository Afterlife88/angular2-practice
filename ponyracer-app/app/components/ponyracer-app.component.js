"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var races_cmp_1 = require('./races_cmp');
var ponies_cmp_1 = require('./ponies_cmp');
var race_service_1 = require('../services/race-service');
var PonyRacerAppComponent = (function () {
    function PonyRacerAppComponent(raceService) {
        this.raceService = raceService;
    }
    PonyRacerAppComponent.prototype.list = function () {
        return this.raceService.list();
    };
    PonyRacerAppComponent = __decorate([
        core_1.Component({
            selector: 'ponyracer-app',
            template: "\n    <h1>PonyRacer</h1>\n    <ns-ponies></ns-ponies>",
            directives: [races_cmp_1.RacesComponent, ponies_cmp_1.PoniesComponent]
        }), 
        __metadata('design:paramtypes', [race_service_1.RaceService])
    ], PonyRacerAppComponent);
    return PonyRacerAppComponent;
}());
exports.PonyRacerAppComponent = PonyRacerAppComponent;
//# sourceMappingURL=ponyracer-app.component.js.map
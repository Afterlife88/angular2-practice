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
var RacesComponent = (function () {
    function RacesComponent() {
        this.races = [{ name: 'London' }, { name: 'Lyon' }];
    }
    RacesComponent = __decorate([
        core_1.Component({
            selector: 'ns-races',
            template: "<div *ngIf=\"races.length > 0\">\n    <h2>Races</h2>\n    <ul>\n    <li *ngFor=\"let race of races\">{{race.name}}</li>\n    </ul>\n    </div>"
        }), 
        __metadata('design:paramtypes', [])
    ], RacesComponent);
    return RacesComponent;
}());
exports.RacesComponent = RacesComponent;
//# sourceMappingURL=races_cmp.js.map
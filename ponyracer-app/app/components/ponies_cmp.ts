import {Component} from '@angular/core';

@Component({
    selector: 'ns-ponies',
    template: `<ul>
    <button (click)="refreshPonies()">Refresh</button>
    <li *ngFor="let pony of ponies; let isEven=even"
    [style.color]="isEven ? 'green' : 'black'">
    {{pony.name}}
    </li>
    </ul>`
})
export class PoniesComponent {
    ponies: Array<any> = [{ name: 'Rainbow Dash' }, { name: 'Pinkie Pie' }];

    refreshPonies() {
        this.ponies = [{ name: 'Fluttershy' }, { name: 'Rarity' }]
    }
}
import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';

@Component ({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges{
    @Input() rating: number;
    starWidth: number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    // @Output() notify: EventEmitter<string> = new EventEmitter<string>();

    onClick(): void {
        //this.notify.emit('clicked!');
        this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.starWidth = this.rating * 75 / 5;
    }
}
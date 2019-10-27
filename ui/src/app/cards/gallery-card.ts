import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule, MatListItem } from '@angular/material/list';

import { Card } from './card';

@Component({
    selector: 'gallery-card',
    templateUrl: './gallery-card.html',
    styleUrls: ['./gallery-card.css']
})
/** 
 * Front-end representation of one card in the gallery.
 */
export class GalleryCard {
    // Metadata object containing information about this GalleryCard.
    @Input() card: Card | undefined;

    get description(): string|undefined {
        return this.card!.description;
    }

    get imageUrl(): string|undefined {
        return this.card!.imageUrl;
    }

    get name(): string|undefined {
        return this.card!.name;
    }

    get severity(): number|undefined {
        return this.card!.severity;
    }

    get tags(): string[]|undefined {
        return this.card!.tags;
    }
}

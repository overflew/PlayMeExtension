import { AlbumListItemModule } from './album-list-item/album-list-item.module';
import { ArtistListItemModule } from './artist-list-item/artist-list-item.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../shared/index';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SearchComponent } from './search.component';
import { MatTabsModule, MatProgressBarModule } from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        FlexLayoutModule,
        MatTabsModule,
        ArtistListItemModule,
        AlbumListItemModule,
        MatProgressBarModule
    ],
    exports: [SearchComponent],
    declarations: [SearchComponent]
})
export class SearchModule { }

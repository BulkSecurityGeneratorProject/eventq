import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EventqSharedModule } from '../../shared';
import {
    EventService,
    EventPopupService,
    EventComponent,
    EventDetailComponent,
    EventDialogComponent,
    EventPopupComponent,
    EventDeletePopupComponent,
    EventDeleteDialogComponent,
    eventRoute,
    eventPopupRoute,
    EventResolvePagingParams,
} from './';

const ENTITY_STATES = [
    ...eventRoute,
    ...eventPopupRoute,
];

@NgModule({
    imports: [
        EventqSharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        EventComponent,
        EventDetailComponent,
        EventDialogComponent,
        EventDeleteDialogComponent,
        EventPopupComponent,
        EventDeletePopupComponent,
    ],
    entryComponents: [
        EventComponent,
        EventDialogComponent,
        EventPopupComponent,
        EventDeleteDialogComponent,
        EventDeletePopupComponent,
    ],
    providers: [
        EventService,
        EventPopupService,
        EventResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EventqEventModule {}

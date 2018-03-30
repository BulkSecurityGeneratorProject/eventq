import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { EventqQuestionModule } from './question/question.module';
import { EventqEventModule } from './event/event.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        EventqQuestionModule,
        EventqEventModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EventqEntityModule {}

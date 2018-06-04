import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { ElementsButtonComponent } from './elements-button/elements-button.component';

@NgModule({
  declarations: [ElementsButtonComponent],
  imports: [BrowserModule],
  entryComponents: [ElementsButtonComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const elementsButton = createCustomElement(ElementsButtonComponent, { injector });
    customElements.define('ngelements-button', elementsButton);
  }

  ngDoBootstrap() { }
}

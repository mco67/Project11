import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UpgradeModule } from '@angular/upgrade/static';
import { ComponentAComponent } from './component-a/component-a.component';
import { ComponentBComponent } from './component-b/component-b.component';


@NgModule({
  declarations: [
    AppComponent,
    ComponentAComponent,
    ComponentBComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UpgradeModule
  ],
  providers: [],
  bootstrap: []
})


export class AppModule {
  constructor(private upgrade: UpgradeModule) { }
  ngDoBootstrap() { this.upgrade.bootstrap(document.body, ['rainbow'], { strictDi: true }); }
}



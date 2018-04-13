import { HttpModule } from '@angular/http';
import { Router, RouterModule, Routes} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ViewdataComponent } from './viewdata/viewdata.component';
import { AppService } from './app.service';
import { PostDataComponent } from './post-data/post-data.component';
import { TwitterDataComponent } from './twitter-data/twitter-data.component';

const Route:Routes=[{
  path:'postview',component:AppComponent} ,
{ path:'view/:id',component:ViewdataComponent
},{path : 'postdata',component:PostDataComponent }
,{path : 'twitterdata',component:TwitterDataComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    ViewdataComponent,
    PostDataComponent,
    TwitterDataComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot(Route)

  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }

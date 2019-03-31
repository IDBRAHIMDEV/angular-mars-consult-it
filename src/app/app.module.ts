import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ExtraitPipe } from './extrait.pipe';
import { PostsComponent } from './posts/posts.component';
import { VotesComponent } from './votes/votes.component';
import { PanelComponent } from './panel/panel.component';

import { FlashMessagesModule } from 'angular2-flash-messages';

import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', redirectTo: '/posts', pathMatch: 'full'},
  {path: 'posts', component: PostsComponent},
  {path: 'courses', component: ContentComponent},
  {path: '**', component: PageNotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    NavbarComponent,
    SidebarComponent,
    ContentComponent,
    ExtraitPipe,
    PostsComponent,
    VotesComponent,
    PanelComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    FlashMessagesModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

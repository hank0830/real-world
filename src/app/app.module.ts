import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArticleComponent } from './article/article.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';
import { PaginatorComponent } from './paginator/paginator.component';
import { RouterModule, Routes } from '@angular/router';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileResolverService } from './profile/profile-resolver.service';
import { EditorComponent } from './editor/editor.component';
import { TagSelectorComponent } from './editor/tag-selector/tag-selector.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'article/:id', component: ArticleComponent },
  {
    path: 'profile/:username', component: ProfileComponent,
    data: {
      option: [1, 2., 3]
    },
    resolve: { //非同步
      profile: ProfileResolverService
    }
  },
  { path: 'editor', component: EditorComponent },

  // Angular 中冒號 : 後面的通常都是變數名稱


];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ArticleComponent,
    PaginatorComponent,
    ArticleDetailComponent,
    ProfileComponent,
    EditorComponent,
    TagSelectorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

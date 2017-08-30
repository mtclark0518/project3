import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

// import { NavigationComponent } from './navigation/navigation.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  constructor(meta: Meta, title: Title) {

    title.setTitle('colorPsychology');
    meta.addTags([
      {name: 'author', content: ''},
      {name: 'keywords', content: 'color psychology, dewey color system'},
      {name: 'description', content: 'design your personalities color palette'}
    ]);
  }
}

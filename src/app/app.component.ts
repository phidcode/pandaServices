import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  onDeactivate() { // JM add for bot nav scroll to top
   // document.body.scrollTop = 0;
     window.scrollTo(0, 0)
  }
}

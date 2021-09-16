import { Component  } from '@angular/core';
import { Router, Event, NavigationStart } from '@angular/router';

@Component({
  selector: 'class-root',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.scss'],
})
export class ClassComponent {
  showSideBar = true;
  constructor(private router: Router) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        if (
          event.url.indexOf('/temp') > -1 ||
          event.url.indexOf('/submissions') > -1
        ) {
          this.showSideBar = false;
        } else {
          this.showSideBar = true;
        }
      }
    });
  }
}

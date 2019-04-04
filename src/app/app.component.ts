import {Component, ViewEncapsulation} from '@angular/core';
import {Server} from './shared/Server.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'ServerFrontEnd';

  servers: Server[] =  [];

  constructor() {
    this.servers.push(new Server('Hope', 'Germany server', false));
  }

  onServerAdded(serverData: Server) {
    this.servers.push(serverData);
  }

  onBlueprintAdded(serverData: Server) {
    this.servers.push(serverData);
  }

  onChangeFirst() {
    this.servers[0].serverName = 'Changed!';
  }

  onServerDestroy() {
    this.servers.splice(0, 1);
  }

}

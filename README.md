# ng-broadcaster - Broadcasting and Emitting events in Angular

First step - install package:
```
npm install ng-broadcaster
```
Second step - import service in ```app.module.ts```:
```
import { BroadcasterService } from "ng-broadcaster";
```
Third step - add service to ```providers``` in  ```app.module.ts```:
```
@NgModule({
providers: [BroadcasterService]
})
```

## usage example


The broadcasting component (or service in this case):
```
import { BroadcasterService } from 'ng-broadcaster';
import { User } from '../../services/user';

@Injectable()
export class AuthService {
  private user: User;
  constructor(private broadcaster: BroadcasterService) {}

  login() {
      this.broadcaster.broadcast('onLogin', this.user);
  }
}
```
The listening component:
```
import { BroadcasterService } from 'ng-broadcaster';
import { User } from '../../services/user';
import { Subscription } from 'rxjs';

export class MainNavComponent implements OnInit, OnDestroy {
  private user: User;
  private subscription: Susbcription;
  constructor(private broadcaster: BroadcasterService) {}

  ngOnInit() {
    this.subscription = this.broadcaster.on<User>('onLogin').subscribe(
      user => this.user = user as User
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
```

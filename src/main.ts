import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { TodoService } from './app/todo.service';

bootstrapApplication(AppComponent, {
  providers: [TodoService],
});

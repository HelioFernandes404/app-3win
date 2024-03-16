import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule} from '@angular/forms';
import {MatTreeModule} from '@angular/material/tree';
import { HttpClientModule } from '@angular/common/http';


@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
      RouterOutlet, 
      RouterLink, 
      RouterLinkActive,
      MatButtonModule,
      MatIconModule,
      MatToolbarModule,
      MatCheckboxModule,
      FormsModule,
      MatTreeModule,
      HttpClientModule,
      HttpClientModule // Add HttpClientModule to imports array
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent {
    title = 'app-3win';
}

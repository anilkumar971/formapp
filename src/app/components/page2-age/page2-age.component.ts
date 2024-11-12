/*import { Component } from '@angular/core';

@Component({
  selector: 'app-page2-age',
  templateUrl: './page2-age.component.html',
  styleUrl: './page2-age.component.css'
})
export class Page2AgeComponent {

}*/


// src/app/components/page2-age/page2-age.component.ts
import { Component } from '@angular/core';
import { FormService } from '../../services/form.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page2-age',
  templateUrl: './page2-age.component.html',
  styleUrls: ['./page2-age.component.css']
})
export class Page2AgeComponent {
  age: number | null = null;

  constructor(private formService: FormService, private router: Router) {}

  nextPage() {
    if (this.age !== null && this.age > 0) {
      this.formService.saveAge(this.age);
      this.router.navigate(['/page3-selfie']);
    } else {
      alert('Please enter a valid age');
    }
  }
}


/*import { Component } from '@angular/core';

@Component({
  selector: 'app-page1-gender',
  templateUrl: './page1-gender.component.html',
  styleUrl: './page1-gender.component.css'
})
export class Page1GenderComponent {

}*/



// src/app/components/page1-gender/page1-gender.component.ts
import { Component } from '@angular/core';
import { FormService } from '../../services/form.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page1-gender',
  templateUrl: './page1-gender.component.html',
  styleUrls: ['./page1-gender.component.css']
})
export class Page1GenderComponent {
  selectedGender: number | null = null;

  constructor(private formService: FormService, private router: Router) {}

  nextPage() {
    if (this.selectedGender !== null) {
      this.formService.saveGender(this.selectedGender);
      this.router.navigate(['/page2-age']);
    } else {
      alert('Please select a gender');
    }
  }
}


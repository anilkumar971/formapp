/*import { Component } from '@angular/core';

@Component({
  selector: 'app-page4-submit',
  templateUrl: './page4-submit.component.html',
  styleUrl: './page4-submit.component.css'
})
export class Page4SubmitComponent {

}*/


// src/app/components/page4-submit/page4-submit.component.ts
// src/app/components/page4-submit/page4-submit.component.ts

/*import { Component } from '@angular/core';
import { FormService } from '../../services/form.service';

@Component({
  selector: 'app-page4-submit',
  templateUrl: './page4-submit.component.html',
  styleUrls: ['./page4-submit.component.css']
})
export class Page4SubmitComponent {
  constructor(private formService: FormService) {}

  submitForm() {
    this.formService.submitForm().subscribe(
      response => {
        console.log('Form submitted successfully', response);
      },
      error => {
        console.error('Error submitting form', error);
      }
    );
  }
}*/


// src/app/components/page4-submit/page4-submit.component.ts

// src/app/components/page4-submit/page4-submit.component.ts

import { Component, OnInit } from '@angular/core';
import { FormService } from '../../services/form.service';

@Component({
  selector: 'app-page4-submit',
  templateUrl: './page4-submit.component.html',
  styleUrls: ['./page4-submit.component.css']
})
export class Page4SubmitComponent implements OnInit {
  gender!: number;
  age!: number;
  selfiePath!: string;
  successMessage: string = ''; // Added successMessage property

  constructor(private formService: FormService) {}

  ngOnInit() {
    // Retrieve previously saved form data for display
    this.gender = this.formService.getGender();
    this.age = this.formService.getAge();
    this.selfiePath = this.formService.getSelfiePath();
  }

  submitForm() {
    this.formService.submitForm().subscribe(
      response => {
        console.log('Form submitted successfully', response);
        this.successMessage = 'Form submitted successfully!'; // Set success message
      },
      error => {
        console.error('Error submitting form', error);
        this.successMessage = 'Error submitting form. Please try again.'; // Set error message
      }
    );
  }
}

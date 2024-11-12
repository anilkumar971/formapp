/*import { Component } from '@angular/core';

@Component({
  selector: 'app-page3-selfie',
  templateUrl: './page3-selfie.component.html',
  styleUrl: './page3-selfie.component.css'
})
export class Page3SelfieComponent {

}*/


// src/app/components/page3-selfie/page3-selfie.component.ts
import { Component } from '@angular/core';
import { FormService } from '../../services/form.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page3-selfie',
  templateUrl: './page3-selfie.component.html',
  styleUrls: ['./page3-selfie.component.css']
})
export class Page3SelfieComponent {
  selectedFile: File | null = null;

  constructor(private formService: FormService, private router: Router) {}

  onFileChange(event: any) {
    this.selectedFile = event.target.files[0];
  }

  nextPage() {
    if (this.selectedFile) {
      this.formService.saveSelfie(this.selectedFile);
      this.router.navigate(['/page4-submit']);
    } else {
      alert('Please upload a selfie');
    }
  }
}


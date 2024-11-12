/*import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor() { }
}*/

// src/app/services/form.service.ts
/*import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  private formData: any = {
    gender: null,
    age: null,
    selfie: null
  };

  private apiUrl = 'http://localhost:8083/api/form';

  constructor(private http: HttpClient) {}

  saveGender(gender: number) {
    this.formData.gender = gender;
  }

  saveAge(age: number) {
    this.formData.age = age;
  }

  saveSelfie(selfie: File) {
    this.formData.selfie = selfie;
  }

  submitForm(): Observable<any> {
    const formData = new FormData();
    formData.append('gender', this.formData.gender);
    formData.append('age', this.formData.age);
    formData.append('selfie', this.formData.selfie);

    return this.http.post(`${this.apiUrl}/submit`, formData);
  }
}*/

// src/app/services/form.service.ts

/*import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  private apiUrl = 'http://localhost:8083/api/form';
  private formData: any = {
    gender: null,
    age: null,
    selfie: null
  };

  constructor(private http: HttpClient) {}

  // Save each piece of form data
  saveGender(gender: number): void {
    this.formData.gender = gender;
  }

  saveAge(age: number): void {
    this.formData.age = age;
  }

  saveSelfie(selfie: File): void {
    this.formData.selfie = selfie;
  }

  // Submit all form data
  submitForm(): Observable<any> {
    const formData = new FormData();
    formData.append('gender', this.formData.gender.toString());
    formData.append('age', this.formData.age.toString());
    if (this.formData.selfie) {
      formData.append('selfie', this.formData.selfie, this.formData.selfie.name);
    }
    return this.http.post(`${this.apiUrl}/submit`, formData);
  }
}*/

// src/app/services/form.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  private apiUrl = 'http://localhost:8083/api/form';

  private formData: any = {
    gender: null,
    age: null,
    selfie: null
  };

  constructor(private http: HttpClient) {}

  // Methods to save data
  saveGender(gender: number): void {
    this.formData.gender = gender;
  }

  saveAge(age: number): void {
    this.formData.age = age;
  }

  saveSelfie(selfie: File): void {
    this.formData.selfie = selfie;
  }

  // Methods to retrieve saved data
  getGender(): number {
    return this.formData.gender;
  }

  getAge(): number {
    return this.formData.age;
  }

  getSelfie(): File {
    return this.formData.selfie;
  }

  getSelfiePath(): string {
    return this.formData.selfie ? URL.createObjectURL(this.formData.selfie) : '';
  }

  // Submit all form data to the backend
  submitForm(): Observable<any> {
    const formData = new FormData();
    formData.append('gender', this.formData.gender.toString());
    formData.append('age', this.formData.age.toString());
    if (this.formData.selfie) {
      formData.append('selfie', this.formData.selfie, this.formData.selfie.name);
    }
    return this.http.post(`${this.apiUrl}/submit`, formData);
  }
}


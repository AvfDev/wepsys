import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'websys-front';
  customerForm: FormGroup;
  customerList: any = [];

  constructor(
    private formBuilder: FormBuilder,
  ) {

  }

  get customerListDisplay(): any {
    return this.customerList;
  }

  get name() {
    return this.customerForm.get('name');
  }
  get lastName() {
    return this.customerForm.get('lastName');
  }

  get phoneNumber() {
    return this.customerForm.get('phoneNumber');
  }

  get email() {
    return this.customerForm.get('email');
  }

  ngOnInit(): void {
    this.formInit();
  }

  formInit(): void {
    this.customerForm = this.formBuilder.group({
      name: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      phoneNumber: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.email),
    });
  }

  onCustomerAdd(): void {
    if (this.customerForm.valid) {
      const newCustomer = { ...this.customerForm.value };
      this.customerList.push(newCustomer);
    }
  }

  checkIfEmailExists(email: string): boolean {
    return this.customerList.some(x => x.email === email);
  }

  onCustomerDelete(email): void {
    const index = this.customerList.findIndex(x => x.email === email);
    this.customerList.splice(index, 1);
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  userId  = '';
  userForm: FormGroup;
  errorMessage: string | null = "";

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private userService: UserService,
  ) {
     this.userForm = this.formBuilder.group({
          name: [{ value: '' }, [Validators.required]],
          username: [{ value: '' }, [Validators.required]],
          email: [{ value: '' }, [Validators.required]],
          address: this.formBuilder.group({
            street: [''],
            suite: [''],
            city: [''],
            zipcode: [''],
            geo: this.formBuilder.group({
              lat: [''],
              lng: [''],
            }),
          }),
          phone: [{ value: '' }, [Validators.required]],
          website: [{ value: '' }, [Validators.required]],
          company: this.formBuilder.group({
            name: [''],
            catchPhrase: [''],
            bs: [''],
          })
      });
  }


  ngOnInit(): void {
    this.userId = this.route.snapshot.params['id'];
    this.getUser();
  }

  getUser() {
    this.userService.getUserById(this.userId).subscribe({
      next: (data: any) => {
        this.errorMessage = null;
        this.userForm.patchValue(data)
      },
      error: (err: any) => {
        console.log(err);
        this.errorMessage = 'Something went wrong';
      }
    });
  }

  onSubmit() {
    console.log(this.userForm.value);
  }

  
}


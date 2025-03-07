import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
// import { MatInputModule } from '@angular/material/input';
// import { MatButtonModule } from '@angular/material/button';
// import { MatFormFieldModule } from "@angular/material/form-field";
import { LoginComponent } from "./login.component";

@NgModule({
    declarations: [LoginComponent],
    imports: [
        // MatFormFieldModule,
        // MatInputModule,
        // MatButtonModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild([{
            path: '',
            component: LoginComponent
        }])
    ]
})

export class LoginModule { }
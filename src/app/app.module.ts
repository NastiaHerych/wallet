import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/pages/main-page/main-page.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigationMenuComponent } from './components/navigation-menu/navigation-menu.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment.prod';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { SignPageComponent } from './components/pages/sign-page/sign-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HotToastModule } from '@ngneat/hot-toast';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { BtnPrimaruComponent } from './components/buttons/btn-primaru/btn-primaru.component';
import { BtnSecondaryComponent } from './components/buttons/btn-secondary/btn-secondary.component';
import { AddIncomeDialogComponent } from './components/dialogs/add-income-dialog/add-income-dialog.component';
import { AddOutcomeDialogComponent } from './components/dialogs/add-outcome-dialog/add-outcome-dialog.component';
import { UpdateTransactionDialogComponent } from './components/dialogs/update-transaction-dialog/update-transaction-dialog.component';
import { DeleteConfirmationComponent } from './components/dialogs/delete-confirmation/delete-confirmation.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    HeaderComponent,
    NavigationMenuComponent,
    LoginPageComponent,
    SignPageComponent,
    BtnPrimaruComponent,
    BtnSecondaryComponent,
    AddIncomeDialogComponent,
    AddOutcomeDialogComponent,
    UpdateTransactionDialogComponent,
    DeleteConfirmationComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore()),
    MatDialogModule,
    MatButtonModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    HotToastModule.forRoot(),
    provideAuth(() => getAuth()),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

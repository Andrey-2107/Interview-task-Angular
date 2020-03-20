import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFireAuth } from "@angular/fire/auth";
import { User } from "firebase"
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User;

  loggedInSource = new BehaviorSubject<boolean>(false);
  loggedInState = this.loggedInSource.asObservable();


  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
  ) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user.refreshToken));
      } else {
        localStorage.setItem('user', null);
      }
      this.isLoggedIn();
    });
  }

  async login(email: string, password: string) {
    let result = await this.afAuth.auth.signInWithEmailAndPassword(email, password);
    this.router.navigate(['/home']);
  }

  async register(email: string, password: string) {
    let result = await this.afAuth.auth.createUserWithEmailAndPassword(email, password);
    this.sendEmailVerification();
    return result;
  }

  async tryRegister(email: string, password: string) {
     try {
     await this.register(email, password);
    }

    catch (exeption) {
      alert(exeption.message);
    }
  }

  async sendEmailVerification() {
    await this.afAuth.auth.currentUser.sendEmailVerification();
    this.router.navigate(['/home']);
  }

  async logout() {
    await this.afAuth.auth.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['/sign-in']);
  }

  isLoggedIn() {
    const user = JSON.parse(localStorage.getItem('user'));
    this.loggedInSource.next(user !== null);
  }
}

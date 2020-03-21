import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Observable } from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  state: Observable<boolean>;

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    this.state = this.auth.loggedInSource
  }

  logout() {
    this.auth.logout()
  }
}

import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Observable } from "rxjs";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  state: Observable<boolean>;

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    this.state = this.auth.loggedInSource
  }

}

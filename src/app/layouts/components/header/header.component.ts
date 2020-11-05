import { AuthenticationService } from '@core/services/authentication.service';
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginRegisterPopupComponent } from 'app/modules/popup/login-register-popup/login-register-popup.component';
import { CurrentUser } from '@core/models/currentUser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  currentUser: CurrentUser;
  isDropdown: boolean = false;
  isSiderBar: boolean = false;

  @ViewChild('toggleButton', { static: false }) toggleButton: ElementRef;
  @ViewChild('cart', { static: false }) cart: ElementRef;

  constructor(
    public dialog: MatDialog,
    private _authenticationService: AuthenticationService,
    private renderer: Renderer2,
  ) {
    this.renderer.listen('window', 'click', (e: Event) => {
      if (this.cart !== undefined) {
        if (e.target !== this.toggleButton.nativeElement && !this.cart.nativeElement.contains(e.target)) {
          this.isDropdown = false;
        }
      }
    });
  }

  ngOnInit(): void {
    this._authenticationService.currentUserObservable.subscribe(x => this.currentUser = x);
  }

  showPopupLoginRegister(): void {
    const dialogRef = this.dialog.open(LoginRegisterPopupComponent, { panelClass: 'custom-dialog-container' },);
  }

  logout(): void{
    this.isDropdown = false;
    this._authenticationService.logout();
  }
}

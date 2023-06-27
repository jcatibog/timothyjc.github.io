import { Component } from '@angular/core';
import { faAddressCard } from '@fortawesome/free-regular-svg-icons';
import { faFileInvoice, faLaptopCode } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  faAddressCard = faAddressCard;
  faFileInvoice = faFileInvoice;
  faLaptopCode = faLaptopCode;
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-badge',
  standalone: false,
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.css']
})
export class BadgeComponent {
  @Input() text: string = '';
  @Input() active: boolean = false;
}

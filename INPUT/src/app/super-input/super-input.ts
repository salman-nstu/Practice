import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { SuperInput } from '../models/super-input';

@Component({
  selector: 'app-super-input',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.Default,
  templateUrl: './super-input.html',
  styleUrl: './super-input.css'
})
export class SuperInputComponent {
  @Input({ required: true }) config!: SuperInput;
  @Output() readonly valueChange = new EventEmitter<string>();

  onInput(event: Event): void {
    this.valueChange.emit((event.target as HTMLInputElement).value);
  }
}



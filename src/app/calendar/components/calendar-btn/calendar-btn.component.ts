import { ChangeDetectionStrategy, Component, EventEmitter, Output, signal } from '@angular/core';
import { Excercise } from '../../../Excercises/interfaces/excercise.interface';

@Component({
  selector: 'calendar-modal-btn',
  imports: [],
  templateUrl: './calendar-btn.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarBtnComponent {

  showModal = signal(false);

  openModal() {
    this.showModal.set(true);
  }

  closeModal() {
    this.showModal.set(false);
  }

  @Output() value = new EventEmitter<Excercise>();

  excercises = signal<Excercise[]>([
    { id: '1', name: 'curl bicep', src_name: '', description: '', muscles: '' },
    { id: '2', name: 'dominadas', src_name: '', description: '', muscles: '' },
    { id: '3', name: 'extensiones de tricep', src_name: '', description: '', muscles: '' },
    { id: '4', name: 'flexiones de pecho', src_name: '', description: '', muscles: '' },
    { id: '5', name: 'jalon al pecho', src_name: '', description: '', muscles: '' },
    { id: '6', name: 'fondos en paralela', src_name: '', description: '', muscles: '' },
    { id: '7', name: 'press banca', src_name: '', description: '', muscles: '' },
    { id: '8', name: 'press inclinado', src_name: '', description: '', muscles: '' },
    { id: '9', name: 'curl femoral', src_name: '', description: '', muscles: '' },
    { id: '10', name: 'extensiones de cuadricep', src_name: '', description: '', muscles: '' },
    { id: '11', name: 'peso muerto', src_name: '', description: '', muscles: '' },
  ]);

  selectedId = signal<string>('');

  onSelectChange(event: Event) {
    const select = event.target as HTMLSelectElement;
    this.selectedId.set(select.value);
  }

  emitSelected() {
    const selected = this.excercises().find((e: Excercise) => e.id === this.selectedId());
    if (selected) {
      this.value.emit(selected);
      this.closeModal();
      this.selectedId.set('');
    }
  }

}

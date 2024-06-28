import {
  Component,
  Input,
  Output,
  input,
  computed,
  EventEmitter,
  output,
} from '@angular/core';

type User = {
  id: string;
  name: string;
  avatar: string;
};

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;

  // avatar = input.required<string>();
  // name = input.required<string>();

  // imagePath = computed(() => {
  //   return `assets/users/${this.avatar()}`;
  // });

  // select = output<string>();

  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return `assets/users/${this.user.avatar}`;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}

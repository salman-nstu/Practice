import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserCardComponent } from './user-card/user-card.component';

@NgModule({
  declarations: [UserListComponent, UserCardComponent],
  imports: [SharedModule],
  exports: [UserListComponent]
})
export class UsersModule {}

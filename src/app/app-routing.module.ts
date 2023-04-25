import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { CallLogComponent } from './call-log/call-log.component';
import { ContactFavoriteComponent } from './contact-favorite/contact-favorite.component';
import { ContactCallComponent } from './contact-call/contact-call.component';
import { ViewContactComponent } from './view-contact/view-contact.component';


const routes: Routes = [
  {path: "", component: CallLogComponent},
  {path: "add", component: AddContactComponent},
  {path: "fav", component: ContactFavoriteComponent},
  {path: "con", component: ContactListComponent},
  {path: "call", component: ContactCallComponent},
  {path: "view", component: ViewContactComponent},
  {path: "**", component: PagenotfoundComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

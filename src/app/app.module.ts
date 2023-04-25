import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { TodoComponent } from './todo/todo.component';
import { PortalComponent } from './portal/portal.component';
import { BudgetAppComponent } from './budget-app/budget-app.component';
import { StructuralClassComponent } from './structural-class/structural-class.component';
import { DisplayItemsComponent } from './display-items/display-items.component';
import { AddItemsComponent } from './add-items/add-items.component';
import { BlogsComponent } from './blogs/blogs.component';
import { DisplayBlogsComponent } from './display-blogs/display-blogs.component';
import { UserComponent } from './user/user.component';
import { UsersService } from './services/users.service';
import { ChatAppComponent } from './chat-app/chat-app.component';
import { ChatApp2Component } from './chat-app2/chat-app2.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ViewContactComponent } from './view-contact/view-contact.component';
import { CallLogComponent } from './call-log/call-log.component';
import { ContactNavComponent } from './contact-nav/contact-nav.component';
import { SigninComponent } from './signin/signin.component';
import { ContactFavoriteComponent } from './contact-favorite/contact-favorite.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/material.module';
import { OrderByPipe } from './pipes/order-by.pipe';
import { ContactCallComponent } from './contact-call/contact-call.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TodoComponent,
    PortalComponent,
    BudgetAppComponent,
    StructuralClassComponent,
    DisplayItemsComponent,
    AddItemsComponent,
    BlogsComponent,
    DisplayBlogsComponent,
    UserComponent,
    ChatAppComponent,
    ChatApp2Component,
    AboutComponent,
    HomeComponent,
    PagenotfoundComponent,
    NavbarComponent,
    DashboardComponent,
    AddContactComponent,
    ContactListComponent,
    ViewContactComponent,
    CallLogComponent,
    ContactNavComponent,
    SigninComponent,
    ContactFavoriteComponent,
    OrderByPipe,
    ContactCallComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }

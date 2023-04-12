import { Component, Input } from '@angular/core';
import { blogType } from '../interfaceFolder/blogInterface';
import { BlogsService } from '../services/blogs.service';
import { faEdit, faPen, faDeleteLeft } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-display-blogs',
  templateUrl: './display-blogs.component.html',
  styleUrls: ['./display-blogs.component.css']
})
export class DisplayBlogsComponent {
 
  blogArr: blogType[] = [];
  deleteIcon = faDeleteLeft;
  editIcon = faEdit;
  // public title = ''
  // public more = ''
  // public time = ''

constructor(public data: BlogsService){}

  ngOnInit(){
    if(localStorage.getItem("blogData")){
      this.blogArr = JSON.parse(localStorage["blogData"])
    }
 console.log(this.data);
 
  
}


handleEdit(){}
handleDelete(){}

}

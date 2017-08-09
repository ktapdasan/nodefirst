import { Component } from '@angular/core';
import { PostsService } from '../services/post.service';
@Component({
  moduleId: module.id,
  selector: 'user',
  templateUrl: '../template/usertemplate.html',
  providers:[PostsService]
})
export class UserComponent  {
  name:string;
  email:string;
  address: address;
  hobbies: string[];
  showHobbies : boolean;
  posts:Post[];
  constructor(private postsService: PostsService){
    this.name = 'Joberfied';
    this.email = 'noreply@chrsglobal.com';
    this.address = {
      street: 'Street',
      city: 'Boston',
      state:'NA'
    }
    this.hobbies = ['Computer','Watch'],
    this.showHobbies = false;
    this.postsService.getPosts().subscribe(posts =>{
      this.posts = posts;
    });
  }
  toggleHobbies(){
    if(this.showHobbies == true){
      this.showHobbies = false;
    }else{
      this.showHobbies = true;
    }
  }
}

interface address {
  street : string;
  city : string;
  state : string;
}

interface Post {
  id : number;
  title : string;
  body : string;
}

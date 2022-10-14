import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addfriends',
  templateUrl: './addfriends.component.html',
  styleUrls: ['./addfriends.component.css']
})
export class AddfriendsComponent implements OnInit {

  constructor(private myapi:ApiService) { }

  name=""
  friendName=""
  friendNickName=""
  DescribeYourFriend=""

  readValues=()=>{
    let data={
      "name":this.name,
      "friendName":this.friendName,
      "friendNickName":this.friendNickName,
      "DescribeYourFriend":this.DescribeYourFriend
    }
    console.log(data)
    this.myapi.addfriends(data).subscribe(
      (response)=>{
        console.log(response)
        alert("successfully added")
      }
    )
  }


  ngOnInit(): void {
  }

}

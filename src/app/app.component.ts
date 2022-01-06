import { Component, OnInit } from '@angular/core';
import { RandomUser } from './random-user';
import { RandomUserService } from './random-user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  randomUser!: RandomUser

  constructor(private randomUserService: RandomUserService) { }

  ngOnInit(): void {
    this.getUser()
  }

  getUser(): void {
    this.randomUserService.getRandomUser().subscribe(
      fetchedUser => this.randomUser = fetchedUser
    )
  }

}

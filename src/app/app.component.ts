import { Component, OnInit } from '@angular/core';
import { RandomUser, Result } from './random-user';
import { RandomUserService } from './random-user.service';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  randomUser!: RandomUser

  constructor(private randomUserService: RandomUserService) { }

  log() {
    console.log(this.randomUser)
  }

  ngOnInit(): void {
    this.getUser()
    console.log(this.randomUser)
  }

  getUser() {
    this.randomUserService.getRandomUser().subscribe(
      fetchedUser => this.randomUser = fetchedUser
    )
  }

}

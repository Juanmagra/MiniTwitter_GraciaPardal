import { Component, OnInit } from '@angular/core';
import { Tweet} from 'src/app/models/TweetResponse';
import { TweetService } from 'src/app/services/tweet.service';

@Component({
  selector: 'app-all-tweets',
  templateUrl: './all-tweets.component.html',
  styleUrls: ['./all-tweets.component.scss']
})
export class AllTweetsComponent implements OnInit {
  listaTweets:Tweet[];
  displayedColumns:['id', 'mensaje','user'];


  constructor( private tweetsService: TweetService) { }

  ngOnInit() {
    this.loadTweets();
  }
  loadTweets() {
    this.tweetsService.allTweets().subscribe(resp=>{
      this.listaTweets = resp;

      console.log(this.listaTweets);
    });
  }

}

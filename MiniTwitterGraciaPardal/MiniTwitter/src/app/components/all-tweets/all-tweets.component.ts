import { Component, OnInit } from '@angular/core';
import { Tweet } from 'src/app/models/tweetResp';
import { TweetService } from 'src/app/services/tweet.service';

@Component({
  selector: 'app-all-tweets',
  templateUrl: './all-tweets.component.html',
  styleUrls: ['./all-tweets.component.scss']
})
export class AllTweetsComponent implements OnInit {

  listaTweets: Tweet[] = [];
  constructor(private tweetsService: TweetService) { }

  ngOnInit() {
    this.loadTweets();
  }
  loadTweets() {
    this.tweetsService.allTweets().subscribe(resp => {
      let i = 0;
      resp.forEach(element => {
        while (i<20){
        let tweet = new Tweet(element.id, element.mensaje,element.likes,element.user);
        this.listaTweets.push(tweet);
        i++;
        console.log(tweet);
        break;
        }
      });
      console.log(this.listaTweets);
    });
  }

}

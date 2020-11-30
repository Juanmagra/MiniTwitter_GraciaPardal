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
  listaTweetsFav: Tweet[] = [];

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
        break;
        }
      });
    });
  }

  favTweet(idTweet:number):void {
    this.tweetsService.tweetFav(idTweet).subscribe(resp=>{
      console.log(resp.likes.length);
    });

  }

  //   let posible:Tweet; 
  //   this.listaTweets.forEach(element => {
  //     if(element.id==idTweet){
  //       posible = element;
  //       console.log(posible);  
  //     }
  //   });

  //   if(this.listaTweetsFav.length <1){
  //     this.listaTweetsFav.push(posible);
  //   }else{
  //   this.listaTweetsFav.forEach(elementFav =>{     
  //     if(posible.id == elementFav.id){
  //       alert("Ese tweet ya esta en favoritos.");
        
  //     }else{
  //       this.listaTweetsFav.push(posible);
  //     }
  //   });
  // }
  //   console.log(this.listaTweetsFav);
  // }
}

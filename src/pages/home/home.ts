import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }

  quotesArr: Array<any> = [
    {
      message: 'The way get Started is to quit talking and begin doing.',
      author: 'Walt Disney'
    },
    {
      message: 'The pessimist sees difficulty in every opportunity. The Optimist sees the opportunity in every difficulty.',
      author: 'Winston Churchill'
    },
    {
      message: 'Do not let Yesterday take up to much of today.',
      author: 'Will Rogers'
    },
    {
      message: 'You learn more failure than from success. Do not let it stop you, failure builds character.',
      author: 'Unknown'
    },
    {
      message: 'It is not whether you get knocked down, it is whether you get up.',
      author: 'Vince Lombardi'
    },
    {
      message: 'If you are working on something that you really care about, you do not have to be pushed. The vision pulls you.',
      author: 'Steve Jobs'
    },

  ]

  quote: Array<object> = [{}];

  ngOnInit() {
    this.changeQuote();
  }

  changeQuote() {
    let quotes = [...this.quotesArr];
    this.getQuotes(quotes);
    setInterval(() => {

      quotes = this.checkQuotesIfEmpty(quotes) ? [...this.quotesArr] : quotes;
      this.getQuotes(quotes);

    }, 10000)

  }

  checkQuotesIfEmpty(quotes: any) {
    return quotes.length == 0 ? true : false;
  };

  getQuotes(quotes: any) {
    var rng = (Math.floor((Math.random() * quotes.length) + 0));
    this.quote = quotes.splice(this.isDuplicate(quotes, rng), 1);
  }

  isDuplicate(quotes: any, rng: number) {
    var newRng = rng >= quotes.length - 1 ? rng - 1 : rng + 1;
    return this.quote['author'] == quotes[rng].author ? newRng : rng;
  }

  copyText(text: string) {
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = text + " \n \n-" + this.quote[0]['author'];
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);

    alert('the Quote message has been copied to clipboard');
  }




}
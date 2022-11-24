import { Component } from '@angular/core';
import { ethers } from 'ethers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'My First Dapp';
  lastBlockNumber;
  clicks = 0;
  constructor() {
    this.lastBlockNumber = 0;
    ethers
      .getDefaultProvider('goerli')
      .getBlock('latest')
      .then((block) => {
        this.lastBlockNumber = block.number;
      });
  }

  click(value: string) {
    this.clicks += parseFloat(value);
  }
}

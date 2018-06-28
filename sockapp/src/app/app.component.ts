import { Component } from '@angular/core';

import * as io from 'socket.io-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	
	title = 'app';

	private url = 'http://localhost:3000';
	
	socket = io(this.url);

	constructor() {
			   
	}

	ngOnInit(): void {

	    console.log('Hello there...');

	}



}

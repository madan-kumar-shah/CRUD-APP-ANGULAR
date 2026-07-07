import { Component } from '@angular/core';

@Component({
  selector: 'app-environments',
  templateUrl: './environments.component.html',
  styleUrls: ['./environments.component.scss']
})
export class EnvironmentsComponent {
  production = true;

  apiUrl = 'https://localhost:5001/api';

  imageUrl = 'https://localhost:5001/images';

  razorPayKey = '';

  stripeKey = '';

  openAIKey = '';
}

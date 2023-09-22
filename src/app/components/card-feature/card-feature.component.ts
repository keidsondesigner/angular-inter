import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-feature',
  templateUrl: './card-feature.component.html',
  styleUrls: ['./card-feature.component.scss'],
})
export class CardFeatureComponent  implements OnInit {
  @Input() titleFeature: string = '';

  @Input() srcFeature: string = '';

  constructor() { }

  ngOnInit() {}

}

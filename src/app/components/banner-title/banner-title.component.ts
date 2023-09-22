import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-banner-title',
  templateUrl: './banner-title.component.html',
  styleUrls: ['./banner-title.component.scss'],
})
export class BannerTitleComponent  implements OnInit {
  @Input() bannerTitle: string = '';

  @Input() srcBanner: string = '';

  @Output() handleClick: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {}

  emitEvent() {
    this.handleClick.emit();
    console.log('Disparando click event filho');
  }

}

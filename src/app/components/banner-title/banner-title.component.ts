import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-banner-title',
  templateUrl: './banner-title.component.html',
  styleUrls: ['./banner-title.component.scss'],
})
export class BannerTitleComponent {
  @Input() bannerTitle: string = '';

  @Input() srcBanner: string = '';

  @Output() onClickHandler: EventEmitter<void> = new EventEmitter<void>();

  emitClickEvent() {
    this.onClickHandler.emit();
    console.log('Filho emitindo event click');
  }
}

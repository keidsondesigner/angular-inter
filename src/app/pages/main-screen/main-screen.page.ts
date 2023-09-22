import { Component, EventEmitter, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.page.html',
  styleUrls: ['./main-screen.page.scss'],
})
export class MainScreenPage implements OnInit {
	iconEyeOn = 'eye-outline';

	iconEyeOff = 'eye-off-outline';

	showAmount!: boolean;

	eventChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  showFeaturesSecondary: boolean = false;

  accountDetails = {
		accountBalance: '1470.81',
	};

  featuresPrimary = [
    { titleFeature: 'Cartões', srcFeature: '../../../assets/icon/icon-card-outline.svg' },
    { titleFeature: 'Pix', srcFeature: '../../../assets/icon/icon-pix.svg' },
    { titleFeature: 'Investir', srcFeature: '../../../assets/icon/icon-trending-up-outline.svg' },
    { titleFeature: 'Pagamentos', srcFeature: '../../../assets/icon/icon-barcode-outline.svg' },
    { titleFeature: 'Inter Pontos', srcFeature: '../../../assets/icon/icon-diamond-outline.svg' },
    { titleFeature: 'Antecipar FGTS', srcFeature: '../../../assets/icon/icon-fgts.svg' },
  ];

  featuresSecondary = [
    { titleFeature: 'Cartões', srcFeature: '../../../assets/icon/icon-card-outline.svg' },
    { titleFeature: 'Pix', srcFeature: '../../../assets/icon/icon-pix.svg' },
    { titleFeature: 'Investir', srcFeature: '../../../assets/icon/icon-trending-up-outline.svg' },
    { titleFeature: 'Pagamentos', srcFeature: '../../../assets/icon/icon-barcode-outline.svg' },
    { titleFeature: 'Inter Pontos', srcFeature: '../../../assets/icon/icon-diamond-outline.svg' },
    { titleFeature: 'Antecipar FGTS', srcFeature: '../../../assets/icon/icon-fgts.svg' },
  ];

  constructor(private navController: NavController) { }

  ngOnInit() {
  }

  toggleShowAmount() {
		this.showAmount = !this.showAmount;
		this.eventChange.emit(this.showAmount);
	}

  toggleFeaturesSecondary() {
    this.showFeaturesSecondary = !this.showFeaturesSecondary;
  }

  navigateStatement() {
    this.navController.navigateForward('statement');
  }

  onHandleClick() {
    console.log('Disparando o click pai??');
  }

  handleNavigateFeature(id: number) {
    switch (id) {
      case 0:
        this.navController.navigateForward('statement');
        break;
      case 1:
        this.navController.navigateForward('statement');
        break;

      default:
        break;
    }
  }
}

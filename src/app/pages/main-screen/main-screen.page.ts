import { Component, EventEmitter, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.page.html',
  styleUrls: ['./main-screen.page.scss'],
})
export class MainScreenPage implements OnInit {
  readonly apiAwsStorage = environment.awsStorageS3;

	iconEyeOn = 'eye-outline';

	iconEyeOff = 'eye-off-outline';

	showAmount!: boolean;

	eventChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  showFeaturesSecondary: boolean = false;

  accountDetails = {
		accountBalance: '1470.81',
	};

  featuresPrimary = [
    { titleFeature: 'Cartões', srcFeature: `${this.apiAwsStorage}/icon/icon-card-outline.svg` },
    { titleFeature: 'Pix', srcFeature: `${this.apiAwsStorage}/icon/icon-pix.svg` },
    { titleFeature: 'Investir', srcFeature: `${this.apiAwsStorage}/icon/icon-trending-up-outline.svg` },
    { titleFeature: 'Pagamentos', srcFeature: `${this.apiAwsStorage}/icon/icon-barcode-outline.svg` },
    { titleFeature: 'Inter Pontos', srcFeature: `${this.apiAwsStorage}/icon/icon-diamond-outline.svg` },
    { titleFeature: 'Antecipar FGTS', srcFeature: `${this.apiAwsStorage}/icon/icon-fgts.svg` },
  ];

  featuresSecondary = [
    { titleFeature: 'Cartões', srcFeature: `${this.apiAwsStorage}/icon/icon-card-outline.svg` },
    { titleFeature: 'Pix', srcFeature: `${this.apiAwsStorage}/icon/icon-pix.svg` },
    { titleFeature: 'Investir', srcFeature: `${this.apiAwsStorage}/icon/icon-trending-up-outline.svg` },
    { titleFeature: 'Pagamentos', srcFeature: `${this.apiAwsStorage}/icon/icon-barcode-outline.svg` },
    { titleFeature: 'Inter Pontos', srcFeature: `${this.apiAwsStorage}/icon/icon-diamond-outline.svg` },
    { titleFeature: 'Antecipar FGTS', srcFeature: `${this.apiAwsStorage}/icon/icon-fgts.svg` },
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

  detailsBanner(value: number) {
    console.log('Disparando o click pai??');
    // if (value === 0) {
    //   console.log("Global Account");
    // }
    // if (value === 1) {
    //   console.log("Antecipação FGTS");
    // }
    // if (value === 2) {
    //   console.log("Plano Odonto");
    // }

    switch (value) {
      case 0:
        console.log("Global Account");
        break;
      case 1:
        console.log("Antecipação FGTS");
        break;
      case 2:
        console.log("Plano Odonto");
        break;
      default:
        break;
    }
  }

  handleNavigateFeature(id: number) {
    setTimeout(() => {
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
    }, 500);
  }
}

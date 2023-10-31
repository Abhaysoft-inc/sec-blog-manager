import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private loading: HTMLIonLoadingElement | null = null;

  constructor(private loadingController: LoadingController) {}

  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Loading...',
    });
    await this.loading.present();
  }

  dismissLoading() {
    if (this.loading) {
      this.loading.dismiss();
    }
  }
}

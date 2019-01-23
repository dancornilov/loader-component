import {Component} from '@angular/core';
import {LoaderService} from './loader/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private loaderService: LoaderService) {
  }

  /**
   * Show loader
   * @param type
   */
  public showLoader(type?): void {
    switch (type) {
      case 'first':
        this.loaderService.showLoader(type);
        break;
      case 'second':
        this.loaderService.showLoader(type);
        break;
      default:
        this.loaderService.showLoader();
        break;
    }
  }

  /**
   * Hide loader
   */
  public hideLoader(): void {
    this.loaderService.hideLoader();
  }
}

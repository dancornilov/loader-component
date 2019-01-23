import {Component, Input, OnInit} from '@angular/core';
import {LoaderService} from '../loader.service';
import {Loader} from '../loader.model';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  @Input() public id: string = 'global';
  public show: boolean;

  constructor(private loaderService: LoaderService) {
  }

  public ngOnInit(): void {
    this.loaderService.loaderStatus$.subscribe((response: Loader) => {
      this.show = this.id === response.id && response.status;
    });
  }

  /**
   * Is just for demo scope
   */
  public close(): void {
    this.loaderService.hideLoader();
  }
}

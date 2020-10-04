import { nav } from './components/nav/nav';
import { UnSubscribable } from '@core/un-subscrible';

export class LayoutBaseComponent extends UnSubscribable {
  navigation: any;

  constructor() {
    super();
    this.navigation = nav;
  }

}

import './index.scss';
// import '@webcomponents/custom-elements';
// import '@webcomponents/webcomponentsjs/webcomponents-bundle';
// import $ from 'jquery';
//import 'jquery-ui';
//import _ from 'lodash';
//import rand from 'lodash/rand';

// @ts-ignore
// import registerServiceWorker from '@henderea/static-site-builder/registerServiceWorker';

// if(process.env.NODE_ENV === 'production') {
//   registerServiceWorker();
// }

const timezone = 'US/Eastern';

class UserTz extends HTMLElement {
  constructor() { super(); }

  connectedCallback() {
    this.textContent = timezone || 'US/Eastern';
  }

  get timezone(): string { return this.textContent || 'US/Eastern'; }
  set timezone(value: string) { this.textContent = value || 'US/Eastern'; }
}

window.customElements.define('user-tz', UserTz);

import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
import "./employee-form/employee-form.js";

import api from "./employee-api";

/**
 * @customElement
 * @polymer
 */
class PolymerFormApp extends PolymerElement {
  static get template() {
    return html`
      <employee-form 
        id="employeeForm" 
        employee="[[employee]]">
      </employee-form>
    `;
  }
  static get properties() {
    return {
      employee: {
        type: Object,
        value: {
          name: "",
          position: "",
          eDisposition: [],
          disposition: ""
        }
      }
    };
  }

  ready() {
    super.ready();
    this.employee = api.get("matthew-id");
  }

}

window.customElements.define('polymer-form-app', PolymerFormApp);

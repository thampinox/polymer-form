import { PolymerElement, html } from '@polymer/polymer';
import '@polymer/iron-form/iron-form.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-input/paper-textarea.js';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '@polymer/paper-item/paper-item.js';
import '@polymer/paper-listbox/paper-listbox.js';
import '@polymer/paper-button/paper-button.js';

class EmployeeForm extends PolymerElement {
    static get template() {
        return html`
            <style>
                #form {
                    width: 50%;
                    margin: 10% auto;
                }
            </style>

            <iron-form id="form" >
                <form action="/foo" method="put">
                    <paper-input 
                        type="text" 
                        label="Enter your name" 
                        name="name" 
                        value="[[employee.name]]" 
                        required>
                    </paper-input>
                    <paper-textarea 
                        label="Describe your position" 
                        name="position"
                        value="[[employee.position]]">
                    </paper-textarea>
                    <paper-dropdown-menu 
                        label="Select one of:" 
                        name="disposition"
                        value="[[employee.disposition]]">
                        <paper-listbox class="dropdown-content" slot="dropdown-content">
                            <template is="dom-repeat" items="{{employee.eDisposition}}">
                                <paper-item value="[[item]]">[[item]]</paper-item>
                            </template>
                        </paper-listbox>
                    </paper-dropdown-menu>
                    <br><br>
                    <paper-button raised on-click="submit">Submit</paper-button>
                </form>
            </iron-form>
    `;
    }

    static get properties() {
        return {
            employee: {
                type: Object
            }
        };
    }

    ready() {
        super.ready();
        this.$.form.addEventListener('iron-form-submit', function (event) {
            alert(JSON.stringify(event.detail));
        });
    }

    submit() {
        this.$.form.submit();
    }


}
customElements.define('employee-form', EmployeeForm);
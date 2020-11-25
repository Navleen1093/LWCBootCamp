import { LightningElement } from 'lwc';

export default class QuickCreate extends LightningElement {
    showAccounts=false;
    showOpportunity=false;
    showContact=false;
    handleReset() {
        const inputFields = this.template.querySelectorAll(
            'lightning-input-field'
        );
        if (inputFields) {
            inputFields.forEach(field => {
                field.reset();
            });
        }
     }
    showAccountFields(){
        this.showAccounts=!this.showAccounts;
    }
    showOpprtunityFields(){
        this.showOpportunity=!this.showOpportunity;
    }
    showContactFields(){
        this.showContact=!this.showContact;
    }
    handleSuccess(event){
        const inputFields = this.template.querySelectorAll(
            'lightning-input-field'
        );
        if (inputFields) {
            inputFields.forEach(field => {
                field.reset();
            });
        }
    }
}
import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class NavigationDemo extends NavigationMixin(LightningElement) {
    value = '';
    showAccount = false;
    showContact = false;
    showOppty = false;
    get options() {
        return [
            { label: 'Account', value: 'Account' },
            { label: 'Contact', value: 'Contact' },
            { label: 'Opportunity', value: 'Opportunity' },
        ];
    }

    handleChange(event) {
        this.value = event.detail.value;
        this.showAccount = false;
        this.showContact = false;
        this.showOppty = false;
    }
    quickCreate() {
        if (this.value === 'Account') {
            this.showAccount = true;
            //this.showContact = false;
            //this.showOppty = false;
        }
        else if (this.value === 'Contact') {
            this.showContact = true;
        }
        else {
            this.showOppty = true;
        }
    }
    newRecord(){
        if (this.value === 'Account') {
            this[NavigationMixin.Navigate]({
                type: 'standard__objectPage',
                attributes: {
                    objectApiName: 'Account',
                    actionName: 'new',
                },
            });
        }
        else if (this.value === 'Contact') {
            this[NavigationMixin.Navigate]({
                type: 'standard__objectPage',
                attributes: {
                    objectApiName: 'Contact',
                    actionName: 'new',
                },
            });
        }
        else {
            this[NavigationMixin.Navigate]({
                type: 'standard__objectPage',
                attributes: {
                    objectApiName: 'Opportunity',
                    actionName: 'new',
                },
            });
        }

    }
    handleSuccess() {
        const inputFields = this.template.querySelectorAll(
            'lightning-input-field'
        );
        if (inputFields) {
            inputFields.forEach(field => {
                field.reset();
            });
        }
    }
    handleReset() {
        const inputFields = this.template.querySelectorAll(
            'lightning-input-field'
        );
        if (inputFields) {
            inputFields.forEach(field => {
                field.reset();
            });
        }
        this.showAccount = false;
        this.showContact = false;
        this.showOppty = false;
    }
}
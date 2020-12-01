import { LightningElement,wire} from 'lwc';
import SAMPLEMC from '@salesforce/messageChannel/SubscribeContact__c';
import { publish, MessageContext } from 'lightning/messageService';

export default class CreateQuickContact extends LightningElement {
    @wire(MessageContext)
    messageContext;
    contactId;
    name;
    setName(event){
        this.name=event.target.value;
    }
    handleSuccess(event){
        this.contactId = event.detail.id;
        const inputFields = this.template.querySelectorAll(
            'lightning-input-field'
        );
        if (inputFields) {
            inputFields.forEach(field => {
                field.reset();
            });
        }
        const message = {
            lmsData:{
                contactName:this.name.FirstName+` `+this.name.LastName,
                id:this.contactId
            }
        };
        publish(this.messageContext, SAMPLEMC, message);
    }
}
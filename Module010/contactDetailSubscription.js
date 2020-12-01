import { LightningElement,wire } from 'lwc';
import { subscribe, unsubscribe, MessageContext } from 'lightning/messageService';
import SAMPLEMC from '@salesforce/messageChannel/SubscribeContact__c';

export default class ContactDetailSubscription extends LightningElement {
    @wire(MessageContext)
    messageContext;
    contactList=[];
    subscription = null;
    receivedMessage;

    subscribelms(){
        console.log('Subscribed');
        if (this.subscription) {
            return;
        }
        this.subscription = subscribe(
            this.messageContext,
            SAMPLEMC, (message) => {
                this.handleMessage(message);
            });
    }
    unSubscribelms(){
        console.log('UnSubscribed');
        unsubscribe(this.subscription);
        this.subscription = null;
    }
    handleMessage(message) {
        this.receivedMessage = message.lmsData.contactName;
        let con={
            key: message.lmsData.id, 
            value: this.receivedMessage
        };
        this.contactList.push(con);
    }
    clearlms(){
        this.contactList='';
        this.receivedMessage='';
    }
}
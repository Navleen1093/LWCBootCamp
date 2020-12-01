import { LightningElement,wire,api} from 'lwc';
//import { getRecord } from 'lightning/uiRecordApi';
import getOpportunity from '@salesforce/apex/showOppDetailsController.getOpportunity'
import getOpportunityDetails from '@salesforce/apex/showOppDetailsController.getOpportunityDetails';

export default class ShowOppDetails extends LightningElement {
    @api recordId;
    opportunities;
    selectOpp=false;
    opptyId;
    name;
    accountName;
    stageName;
    closeDate;
    amount;
    stageShow=false;
    searchOpportunity(){
        getOpportunityDetails({accountId:this.recordId})
        .then(result=>{
            this.opportunities=result;
        })
        .catch(error=>{
            console.log('Error occured' + error.body.message);
        })

    }
    selectedOpportunity(event) {
        event.preventDefault();
        this.selectOpp = true;
        
        //alert('slected opportunity'+event.currentTarget.dataset.opportunityId);
        this.opptyId = event.currentTarget.dataset.opportunityId;
        getOpportunity({opptyId: this.opptyId})
        .then(result=>{
            this.name= result.Name;
            this.accountName = result.Account.Name;
            this.stageName=result.StageName;
            this.closeDate=result.CloseDate;
            this.amount=result.Amount;
            console.log('Success' + result.Name);
            this.template.querySelectorAll(".slds-path__title").forEach((element)=>{
                console.log('element' +  element); 
                if(element.label =result.StageName){
                     this.stageShow=true;
                     console.log(' this.stageShow' +  this.stageShow);
                }
              });
        }).catch(error=>{
            console.log('Error occured' + error.body.message);
        })
        }
}
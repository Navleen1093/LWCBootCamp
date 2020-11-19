import { LightningElement,track } from 'lwc';
import jerry from '@salesforce/resourceUrl/jerryImage';
import tom from '@salesforce/resourceUrl/tomImage';

export default class IfElseDemo extends LightningElement {
    jerryToShow = jerry;
    tomToShow = tom;
    @track isShow = true;
    handleClickJerry(){
        this.isShow=false;
    }
    handleClickTom(){
        this.isShow=true;
    }

}
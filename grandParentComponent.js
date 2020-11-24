import { api,LightningElement } from 'lwc';

export default class GrandParentComponent extends LightningElement {
    selectedAll=0;
    handleReset(){
        this.template.querySelector("c-parent-component").resetAll();
        this.selectedAll=0;
    }
    handleChildClick(event){
       if(event.detail.selAll==='Deselect'){
            this.selectedAll=this.selectedAll+1;
       }
       else{
            this.selectedAll=this.selectedAll-1;
       }
    }
}
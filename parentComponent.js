import { api,LightningElement } from 'lwc';

export default class ParentComponent extends LightningElement {
    @api select1='Deselected';
    @api select2='Deselected';
    @api select3='Deselected';
    reset=false;
    handleChildClick1(event){
       if(event.target.label==='Select'){
           this.select1='Deselected';
       }else{
           this.select1='Selected';
       }
    }
    handleChildClick2(event){
        if(event.target.label==='Select'){
            this.select2='Deselected';
        }else{
            this.select2='Selected';
        }       
    }
    handleChildClick3(event){
        if(event.target.label==='Select'){
            this.select3='Deselected';
        }else{
            this.select3='Selected';
        }     
    }
    @api
    resetAll(){
        this.select1='Deselected';
        this.select2='Deselected';
        this.select3='Deselected';
        this.template.querySelector("c-child-component").resetChild();
    }
}
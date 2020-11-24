import { api, LightningElement } from 'lwc';

export default class ChildComponent extends LightningElement {
    @api num = 'Child One';
    @api label = 'Select';
    @api variant = 'success';
    @api
    resetChild(){
        this.label='Select';
        this.variant='success';
    }
    handleOnClick(){
        console.log('child component js');
        if(this.label==='Select'){
            this.label='Deselect';
            this.variant='destructive';
        }else{
            this.label='Select';
            this.variant='success';
        }
        const childevent = new CustomEvent('customclick',
            {
                bubbles : true,
                composed : true,
                detail:{
                    selAll:this.label
                }
            });
            this.dispatchEvent(childevent);
    }
   
}
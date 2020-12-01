import { LightningElement,track } from 'lwc';

export default class CalculatorDemo extends LightningElement {
    @track calculation='';
    result=0;
    value1='';
    value2;
    perform;
    one(){
        this.calculation= this.calculation +'1';
        console.log('this.calculation'+this.calculation);
        this.value2=1;
        console.log('this.value1'+this.value1);
        this.calc();
        console.log('number'+this.calculation.charAt(this.calculation.length-2));
        if(Number(this.calculation.charAt(this.calculation.length-2))){
            this.value1 = this.calculation.charAt(this.calculation.length-2)+'1';
            console.log('value1->'+this.value1);
            console.log('perform->'+this.perform);
            this.calc();
        }else{
        this.perform='';
        }
    }
    two(){
        this.calculation = this.calculation +'2';
        this.value2=2;
        console.log('this.value2'+this.value2);
        this.calc();
        this.perform='';
    }
    three(){
        this.calculation = this.calculation +'3';
        this.value2=3;
        console.log('this.value2'+this.value2);
        this.calc();
        this.perform='';
    }
    four(){
        this.calculation = this.calculation +'4';
        this.value2=4;
        console.log('this.value2'+this.value2);
        this.calc();
        this.perform='';
    }
    five(){
        this.calculation = this.calculation +'5';
        this.value2=5;
        console.log('this.value2'+this.value2);
        this.calc();
        this.perform='';
    }
    six(){
        this.calculation = this.calculation +'6';
        this.value2=6;
        this.calc();
        this.perform='';
    }
    seven(){
        this.calculation = this.calculation + '7';
        this.value2=7;
        this.calc();
        this.perform='';
    }
    eight(){
        this.calculation = this.calculation +'8';
        this.value2=8;
        this.calc();
        this.perform='';
    }
    nine(){
        this.calculation = this.calculation +'9';
        this.value2=9;
        this.calc();
        this.perform='';
    }
    add(){
        this.calculation = this.calculation +'+';
        //this.value1=this.calculation.charAt(this.calculation.length-2);
        let v=this.calculation.split('+');
        //console.log('this.value'+this.value1);
        console.log('v'+v[0]);
        this.value1 = v[0];
        this.perform='+';
        console.log('this.perform'+this.perform);
    }
    sub(){
        this.calculation = this.calculation +'-';
        let v=this.calculation.split('-');
        console.log('v'+v[0]);
        this.value1 = v[0];
        //this.value1=this.calculation.charAt(this.calculation.length-2);
        this.perform='-';
    }
    mul(){
        this.calculation = this.calculation +'*';
        let v=this.calculation.split('*');
        console.log('v'+v[0]);
        this.value1 = v[0];
        //this.value1=this.calculation.charAt(this.calculation.length-2);
        this.perform='*';
    }
    div(){
        this.calculation = this.calculation +'/';
        let v=this.calculation.split('/');
        console.log('v'+v[0]);
        this.value1 = v[0];
        //this.value1=this.calculation.charAt(this.calculation.length-2);
        this.perform='/';
    }
    clear(){
        this.calculation='';
        this.result=0;
        this.value1=0;
        this.perform='';
    }
    equal(){
        this.calculation = this.calculation +'=';
    }
    zero(){
        this.calculation = this.calculation +'0';
        this.value2=0;
        this.calc();
        this.perform='';
    }
    calc(){
        if(this.result===0){
            this.result=Number(this.value1);
        }
        if(this.perform==='+'){
            this.result= Number(this.result)+Number(this.value2);
            console.log('this.result'+this.result);
        }
        if(this.perform==='-'){
            this.result= Number(this.result)-Number(this.value2);
            console.log('this.result'+this.result);
        }
        if(this.perform==='*'){
            this.result= Number(this.result)*Number(this.value2);
            console.log('this.result'+this.result);
        }
        if(this.perform==='/'){
            this.result= Number(this.result)/Number(this.value2);
            console.log('this.result'+this.result);
        }
    }
}
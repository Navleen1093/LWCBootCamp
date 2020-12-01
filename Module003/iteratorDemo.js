import { LightningElement } from 'lwc';
const columns = [
    { label: 'Index', fieldName: 'Index',hideDefaultActions: true},
    { label: 'Id', fieldName: 'id' ,hideDefaultActions: true},
    { label: 'Name', fieldName: 'Name',hideDefaultActions: true},
    { label: 'Email', fieldName: 'Email',hideDefaultActions: true}
];
export default class IteratorDemo extends LightningElement {
contacts=[
    {Index : '0',id : 'C1',Name : 'John Abraham', Email : 'ja@gmail.com'},
    {Index : '1',id : 'C2',Name : 'Brad Pitt', Email : 'bpitt@gmail.com'},
    {Index : '2',id : 'C3',Name : 'Angelina Jolie', Email : 'anjel@gmail.com'},
    {Index : '3',id : 'C4',Name : 'Peter Parker', Email : 'peter14@gmail.com'}
]
columns=columns;

}
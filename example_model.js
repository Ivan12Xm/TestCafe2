import {Selector, t} from 'testcafe';

export default class ExamplePage{
    constructor(){
        this.inputUsuario = Selector('input').withAttribute('name','username');
        this.inputPass = Selector('input').withAttribute('name','password');
        this.inputLogIn = Selector('button').withAttribute('type','submit');
    }
}
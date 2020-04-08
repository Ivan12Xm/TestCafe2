import ExamplePage from '../page_model/example_model';

const page = new ExamplePage();

fixture `Example page tests`
    .page `https://www.instagram.com/`;
    const username= 'fofawam582@smlmail.com';
    const pass ='GenericPassword1';
    test('My First test', async t=>{
        await t
            .typeText(page.inputUsuario, username)
            .typeText(page.inputPass, pass)
            .click(page.inputLogIn)
            .wait(4000);
    });
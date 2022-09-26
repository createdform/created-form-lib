// @ts-ignore
import {formTemplate} from '../fixtures/form-template';

describe('Build form', () => {

    before(() => {

        const template = formTemplate(JSON.parse(`[{"showBuilder":false,
    "fieldType":"number",
    "formName":"Census about you",
    "fieldName":"How many pets do you own?",
    "id":"cba89f3c-44d4-4f13-bc5a-8480db0742f9"},
    {"showBuilder":false,"fieldType":"textfield",
    "formName":"Census about you",
    "fieldName":"Tell us about your first school",
    "placeholderText":"Enter first school",
    "fieldHint":"First school here","id":"9c91c602-fe58-4b80-9096-e4e13426f6f9"},
        {"showBuilder":false,
        "fieldType":"textfield",
    "formName":"Census about you",
    "fieldName":"Mothers maiden name",
    "placeholderText":"Enter her name",
    "fieldHint":"Mums name","id":"9c91c602-fe58-4b80-9096-e4e13426f6f3"},
            {"showBuilder":false,
            "fieldType":"textfield",
    "formName":"Census about you",
    "fieldName":"How many friends do you have?",
    "placeholderText":"Enter her name",
    "fieldHint":"Mums name","id":"9c91c602-fe18-4b80-9096-e4e13426fde3"}
    
    ]`));
        cy.writeFile('public/form-test/tester.html', template);
        cy.visit('http://localhost:3000');
    });

    it('number form', () => {

    });
});

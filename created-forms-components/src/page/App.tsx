import FieldBuilder from './FieldBuilder';

const el = React.createElement;

import React from 'react';
import WrappedForm from '../components/utilities/WrappedForm';

export enum FieldTypes {
    number = 'number',
    dropdown = 'dropdown',
    boolean = 'boolean',
    shortAnswer = 'ShortAnswer',
    starRating = 'StarRating',
    textfield = 'textfield'
}


export type FormBuilderValues = {
    id: string;
    formName: string;
    fieldName: string;
    fieldType: FieldTypes;
    fieldHint?: string;
    placeholderText?: string;
    showBuilder: boolean;
}

export type AppProps = {
    form: FormBuilderValues[];
}
const elementContainer = document.querySelector('#form_container') as HTMLElement;
const Props = JSON.parse(elementContainer.getAttribute('props') as string);

const App = ({form}: AppProps) => {
    console.log(form);
    return (
        <>
            <WrappedForm>
                <div className="bg-orange-300 text-center max-w-2xl mx-auto">
                    <h1 className="text-3xl md:text-4xl font-medium">
                        {form[0].formName}
                    </h1>
                </div>
                {form.map((fields) => <div><FieldBuilder {...fields} /></div>)}
            </WrappedForm>

        </>

    );
};
export default App;

// @ts-ignore
const rootEl = ReactDOM.createRoot(elementContainer);
rootEl.render(el(App, Props));

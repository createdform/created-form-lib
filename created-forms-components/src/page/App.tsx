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
    textfield = 'textfield',
    formId = 'formId'
}


export type FormBuilderValues = {
    id: string;
    formName: string;
    value?: string;
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
    return (
        <>
            <div className="h-screen bg-primary bg-orange-200">
                <WrappedForm>
                    <h1 className="font-medium leading-tight text-5xl mt-0 mb-2 text-blue-600 bg-white rounded text-center">
                        {form[0].formName}
                    </h1>

                    <div>
                        {form.map((fields) => <div><FieldBuilder {...fields} /></div>)}
                    </div>

                    <div className="bg-white p-4 rounded flex justify-center w-full">
                        <button type="submit" className="bg-blue-500 hover:bg-blue-300 text-white p-2 px-6 rounded">
                            Submit
                        </button>
                    </div>
                </WrappedForm>
            </div>


        </>

    );
};
export default App;

// @ts-ignore
const rootEl = ReactDOM.createRoot(elementContainer);
rootEl.render(el(App, Props));

import FieldBuilder from './FieldBuilder';

const el = React.createElement;

import React from 'react';
import WrappedForm from '../components/utilities/WrappedForm';

export enum FieldTypes {
    number = 'Number',
    dropdown = 'Drop Down',
    boolean = 'Boolean',
    shortAnswer = 'Short Answer',
    starRating = 'Stars',
    textfield = 'Text Field',
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
            <div className="h-full ">


                <div className="progress-container">
                    <div className="progress-bar" id="progress-bar"></div>
                </div>


                <div className="branding">
                    <p>Built with</p>
                    <img src="./Logo.svg" alt="created form"/>
                </div>
                <div className="progress-buttons flex">
                    <a href="#section-1" id="back" className="button round minimal" title="back">
                        <img className="child" src="./arrow-circle-right.svg" alt="back button"/>
                    </a>
                    <a href="#section-2" id="forward" className="button round minimal"
                       title="forward">
                        <img id="forward-button" className="child" src="./arrow-circle-right.svg" alt="forward button"/>
                        <p id="forward-button-final" className="final hidden">🎉</p>
                    </a>
                </div>
                {form.map((fields) => <div>
                    <section className="landing-page" id="section-1">
                        <div className="field-padding">
                            <FieldBuilder {...fields} />
                        </div>
                    </section>
                </div>)}


                {/*<section id="section-2">*/}
                {/*    <h1>Checkboxes</h1>*/}
                {/*    <div className="checkbox-section">*/}
                {/*        <label>*/}
                {/*            <input type="checkbox" name="checkbox"/>*/}
                {/*            Checkbox*/}
                {/*        </label>*/}

                {/*        <label>*/}
                {/*            <input type="checkbox" name="checkbox-checked" checked/>*/}
                {/*            Checkbox - checked*/}
                {/*        </label>*/}

                {/*        <label className="disabled">*/}
                {/*            <input type="checkbox" name="checkbox-disabled" disabled/>*/}
                {/*            Checkbox Disabled*/}
                {/*        </label>*/}

                {/*        <label className="disabled">*/}
                {/*            <input type="checkbox" name="checkbox-disabled-checked" checked disabled/>*/}
                {/*            Checkbox Disabled - checked*/}
                {/*        </label>*/}
                {/*    </div>*/}
                {/*</section>*/}
                {/*<section id="section-3">*/}
                {/*    <h1>Text Inputs</h1>*/}
                {/*    <input type="text" id="name" name="name" required minLength={4} maxLength={8} size={10} />*/}
                {/*</section>*/}
                {/*<section id="section-4">*/}
                {/*    <h1>Section 4</h1>*/}
                {/*</section>*/}
                {/*<section id="section-5" className="image-background">*/}
                {/*    <h1>Section 5</h1>*/}
                {/*</section>*/}
                {/*<section id="section-6">*/}
                {/*    <h1>Almost There!</h1>*/}
                {/*    <img className="form-image"*/}
                {/*         src="https://media4.giphy.com/media/gHPX9jr3T3nHTE4dZh/giphy.gif?cid=ecf05e472v9v7sk2vd02o71kypi1o42pje0dl8hyxnfp5i3s&rid=giphy.gif&ct=g"*/}
                {/*         width="480" height="270"></img>*/}
                {/*    <p>I want to add the <a href="https://developers.giphy.com/docs/api" target="_blank"*/}
                {/*                            className="link">Giphy api</a> and maybe the <a*/}
                {/*        href="https://www.pexels.com/api/" target="_blank" className="link">pexels api.</a> So then*/}
                {/*        people can easily add gifs and*/}
                {/*        images to their forms</p>*/}
                {/*</section>*/}
                {/*<section id="section-7">*/}
                {/*    <h1>🥳</h1>*/}
                {/*    <h2>Woohooo!</h2>*/}
                {/*    <p>You finished the form.</p>*/}
                {/*    <canvas id="confetti-canvas"></canvas>*/}
                {/*</section>*/}


                {/*<WrappedForm>*/}
                {/*    <h1 className="font-medium leading-tight text-5xl mt-0 mb-2 text-blue-600 bg-white rounded text-center">*/}
                {/*        {form[0].formName}*/}
                {/*    </h1>*/}

                {/*    <div>*/}
                {/*        {form.map((fields) => <div><FieldBuilder {...fields} /></div>)}*/}
                {/*    </div>*/}

                {/*    <div className="bg-white p-4 rounded flex justify-center w-full">*/}
                {/*        <button type="submit" className="bg-blue-500 hover:bg-blue-300 text-white p-2 px-6 rounded">*/}
                {/*            Submit*/}
                {/*        </button>*/}
                {/*    </div>*/}
                {/*</WrappedForm>*/}
            </div>


        </>

    );
};
export default App;

// @ts-ignore
const rootEl = ReactDOM.createRoot(elementContainer);
rootEl.render(el(App, Props));

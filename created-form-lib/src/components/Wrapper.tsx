import TitleField from './TitleField';

const el = React.createElement;

import React from "react";

export type TestProps = {
    title: string;
}
const elementContainer = document.querySelector('#form_container') as HTMLElement;
const testProps = JSON.parse(elementContainer.getAttribute('props') as string);


const Wrapper = ({title}: TestProps) => {
    return <TitleField title={title} />;
};
export default Wrapper;

// @ts-ignore
const rootEl = ReactDOM.createRoot(elementContainer);
rootEl.render(el(Wrapper, testProps));

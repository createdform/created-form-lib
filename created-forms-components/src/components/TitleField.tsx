import React from 'react';
import WrappedFormItem from './utilities/WrappedFormItem';

export type TestProps = {
    title: string;
}
const TitleField = ({title}: TestProps) => {
    return (
        <WrappedFormItem>
            <h1 className="text-blue-500">
                {title}
            </h1>
        </WrappedFormItem>

    );
};
export default TitleField;

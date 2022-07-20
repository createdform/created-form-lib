import WrappedFormItem from './utilities/WrappedFormItem';
import {FormBuilderValues} from '../page/App';

export const NumberInput = (field: FormBuilderValues) => {

    return <WrappedFormItem>
        <div className="mb-2">
            <label htmlFor={field.id} className="font-bold">{field.fieldName}</label>
        </div>
        <input type="number" id={field.id} name={field.fieldName} placeholder={field.placeholderText}
               className="w-full border border-gray-200 rounded p-2"/>

    </WrappedFormItem>;
};

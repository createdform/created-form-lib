import WrappedFormItem from './utilities/WrappedFormItem';
import {FormBuilderValues} from '../page/App';

export const TextFieldInput = (field:  FormBuilderValues) => (
    <WrappedFormItem builder={field.showBuilder}>
        <div className="mb-2">
            <label htmlFor={field.id} className="font-bold">{field.fieldName}</label>
        </div>
        <input type='text' placeholder={field.placeholderText} name={field.fieldName} className="w-full border border-gray-200 rounded p-2" />
        <div>{field.fieldHint}</div>
    </WrappedFormItem>
)

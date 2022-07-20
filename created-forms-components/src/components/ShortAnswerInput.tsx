import WrappedFormItem from './utilities/WrappedFormItem';
import {FormBuilderValues} from '../page/App';

export const ShortAnswerInput = (field: FormBuilderValues) => (
    <WrappedFormItem>
        <div className="mb-2">
            <label htmlFor={field.id} className="font-bold">{field.fieldName}</label>
        </div>
        <textarea placeholder={field.placeholderText} name={field.fieldName} className="w-full border border-gray-200 rounded p-2" />
        <div>{field.fieldHint}</div>
    </WrappedFormItem>
)

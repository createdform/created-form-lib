import WrappedFormItem from './utilities/WrappedFormItem';
import {FormBuilderValues} from '../page/App';

const FormIdField = (field: FormBuilderValues) => (
    <input type="text" name={field.fieldName} className="invisible w-full border border-gray-200 rounded p-2" value={field.value}/>
);

export default FormIdField;

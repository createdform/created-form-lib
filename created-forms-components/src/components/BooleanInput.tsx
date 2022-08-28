import {FormBuilderValues} from '../page/App';
import WrappedFormItem from './utilities/WrappedFormItem';


export const BooleanInput = (field: FormBuilderValues) => (<WrappedFormItem builder={field.showBuilder}>
        <input type="radio" placeholder={field.placeholderText}/>
    </WrappedFormItem>
);

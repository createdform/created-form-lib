import {FieldTypes, FormBuilderValues} from './App';
import {ShortAnswerInput} from '../components/ShortAnswerInput';
import {BooleanInput, NumberInput, TextFieldInput} from '../components';

const FieldBuilder = (field: FormBuilderValues): JSX.Element => {
    if (field) {
        switch (field.fieldType) {
            case FieldTypes.boolean:
                return BooleanInput(field);
            case FieldTypes.dropdown:
                break;
            case FieldTypes.textfield:
                return TextFieldInput(field);
            case FieldTypes.shortAnswer:
                return ShortAnswerInput(field);
            case FieldTypes.number:
                return NumberInput(field);
            case FieldTypes.starRating:
                break;
            default:
                return NumberInput(field);
        }
    }
    return <></>;


};

export default FieldBuilder;

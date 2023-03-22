import FormBasic from "./FormBasic";
import ScreenReplication from "../screen/ScreenReplication";

const initialValues = {
    onderwerp: '',
    spreker: '',
    locatie: '',
    tijd: '',
    datum: '',
    details: ''
};

const storageKeyPrefix = 'FormKennisdeling';

function FormKennisdeling() {
    return (
        <div>
            <FormBasic initialValues={initialValues} storageKeyPrefix={storageKeyPrefix} />
            <ScreenReplication src="/formscreen" />
        </div>
    );
} 

export default FormKennisdeling;

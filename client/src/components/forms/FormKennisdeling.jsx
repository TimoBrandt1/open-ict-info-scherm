import FormBasic from "./FormBasic";
import ScreenReplication from "../screen-replication/component.ScreenReplication";

const initialValues = {
    onderwerp: '',
    spreker: '',
    locatie: '',
    tijd: '',
    datum: '',
    details: ''
};

const endpoint = '/kennisdeling'

function FormKennisdeling() {
    return (
        <div>
            <FormBasic initialValues={initialValues} endpoint={endpoint} />
            <ScreenReplication src="/formscreen" />
        </div>
    );
} 

export default FormKennisdeling;

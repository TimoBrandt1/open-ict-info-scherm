import FormBasic from "./FormBasic";
import ScreenReplication from "../screen-replication/component.ScreenReplication";

const initialValues = {
    onderwerp: '',
    details: '',
    image: null
};

const endpoint = '/showcaseprojecten'

function FormShowcaseProjecten() {
    return (
        <div>
            <FormBasic initialValues={initialValues} endpoint={endpoint} />
            <ScreenReplication src="/formscreen" />
        </div>
    );
} 

export default FormShowcaseProjecten;
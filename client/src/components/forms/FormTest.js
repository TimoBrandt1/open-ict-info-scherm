import FormBasic from './FormBasic';

// This is the initial values for the form
const initialValues = {
    header: '',
    body: '',
    footer: ''
};

const inputNames = ['header', 'body', 'footer']; // these are the input names, make them the same as the keys in initialValues

const storageKeyPrefix = 'formTest'; // this is the prefix for the localStorage keys, make it the same as the name of the component, to keep it unique

function FormTest() { // this is the component
    return (
        <div>
            <FormBasic initialValues={initialValues} inputNames={inputNames} storageKeyPrefix={storageKeyPrefix} />
        </div>
    );
}

export default FormTest;

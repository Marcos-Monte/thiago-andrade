import InputMask from 'react-input-mask';

function NomeInput() {
    return (
        <InputMask mask="" maskChar={null} alwaysShowMask={false}>
            {(inputProps) => <input {...inputProps} placeholder="Nome" />}
        </InputMask>
    );
}
  
export default NomeInput;
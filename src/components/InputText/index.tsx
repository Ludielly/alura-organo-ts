import "./InputText.css";

interface InputTextProps {
  onHandleChange: (value: string) => void
  //é uma função void, que recebe uma string
  label: string
  placeholder: string
  required?: boolean
  value: string
  type?: 'text' | 'password' | 'date' | 'email' | 'number'
}

const InputText = ({ label, placeholder, onHandleChange, value, required = false, type = 'text' }: InputTextProps) => {

  const handleType = (e: React.ChangeEvent<HTMLInputElement>) => {
    onHandleChange(e.target.value)
  };

  return (
    <div className="input-text">
      <label>{label}</label>
      <input
        placeholder={placeholder}
        required={required}
        onChange={handleType}
        value={value}
        type={type}
        />
    </div>
  );
};

export default InputText;

//select component

 export const Select: React.FC<{ defaultValue: string; onValueChange: (value: string) => void; children: React.ReactNode }> = ({ defaultValue, onValueChange, children }) => {
    return (
      <select
        value={defaultValue}
        onChange={(e) => onValueChange(e.target.value)}
        className="border-2 border-gray-300 rounded-md p-2 w-full"
      >
        {children}
      </select>
    );
  };
  //selectItem component
  export const SelectItem: React.FC<{ value: string; label: string; onClick: () => void }> = ({ value, label, onClick }) => {
    return (
      <option value={value} onClick={onClick}>
        {label}
      </option>
    );
  };
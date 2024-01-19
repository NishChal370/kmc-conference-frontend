interface IAgreementCheckBox {
      label: string;
      name: string;
      checked: boolean;
      onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function AgreementCheckBox({ label, name, checked, onChange }: IAgreementCheckBox) {
      return (
            <label className="flex items-start">
                  <input
                        type="checkbox"
                        name={name}
                        checked={checked}
                        onChange={onChange}
                        className="h-5 w-[34px] text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <span className="ml-2 text-sm font-medium text-gray-700">{label}</span>
            </label>
      );
}

export default AgreementCheckBox;

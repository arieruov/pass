interface InputFieldIterface {
  label?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
}

export default function InputField({
  label,
  placeholder,
  onChange,
}: InputFieldIterface) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label className="text-lg font-semibold ml-2 italic">{label}</label>
      )}

      <input
        className="border border-white px-4 py-2 rounded-md outline-0 w-full"
        type="text"
        placeholder={placeholder}
        onChange={(e) => onChange && onChange(e.target.value)}
      />
    </div>
  );
}

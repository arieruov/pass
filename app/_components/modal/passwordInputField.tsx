import { useState } from "react";

interface PasswordInputFieldIterface {
  label?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
}

export default function PasswordInputField({
  label,
  placeholder,
  onChange,
}: PasswordInputFieldIterface) {
  const [passwordVisible, setpasswordVisible] = useState<boolean>(false);

  const makePasswordVisible = () => {
    setpasswordVisible(!passwordVisible);
  };

  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label className="text-lg font-semibold ml-2 italic">{label}</label>
      )}

      <div className="flex gap-4">
        <input
          className="border border-white px-4 py-2 rounded-md outline-0 w-full"
          type={passwordVisible ? "text" : "password"}
          placeholder={placeholder}
          onChange={(e) => onChange && onChange(e.target.value)}
        />
        <button
          className={`font-semibold px-4 py-2 rounded-md cursor-pointer ${
            passwordVisible ? "bg-green-500" : "bg-red-500"
          }`}
          onClick={makePasswordVisible}
        >
          {passwordVisible ? "Hide" : "Show"}
        </button>
      </div>
    </div>
  );
}

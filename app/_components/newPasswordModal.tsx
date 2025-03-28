"use client";

import { useState } from "react";
import ModalBackground from "./modal/modalBackground";
import ModalHeader from "./modal/modalHeader";
import InputField from "./modal/inputField";
import PasswordInputField from "./modal/passwordInputField";

interface NewPasswordModalInterface {
  closeModal: () => void;
}

export default function NewPasswordModal({
  closeModal,
}: NewPasswordModalInterface) {
  const [itemName, setItemName] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <div className="fixed inset-0 flex justify-center items-center">
      <ModalBackground onClick={closeModal} />

      {/* Contenido del modal */}
      <div className="relative bg-neutral-800 p-6 rounded-md w-1/2 max-w-2xl min-w-80">
        <ModalHeader onClick={closeModal} />

        <div className="flex flex-col gap-4">
          <InputField
            label="Item name"
            placeholder="Facebook"
            onChange={setItemName}
          />
          <InputField label="Username" placeholder="johndoe@something.com" />
          <InputField label="URL" placeholder="https://facebook.com/" />
          <PasswordInputField label="Password" placeholder="123456789" />

          {/* Configuraciones de contraseña */}
        </div>
      </div>
    </div>
  );
}

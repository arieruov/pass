"use client";

import { useState } from "react";
import NewPasswordModal from "./newPasswordModal";

export default function Header() {
  const [newPasswordModalShown, setNewPasswordModalShown] =
    useState<boolean>(false);

  const closeModal = () => {
    setNewPasswordModalShown(false);
  };

  return (
    <>
      <header className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">All passwords</h1>
        <div>
          <button
            className="px-4 py-2 bg-violet-500 font-semibold rounded-md cursor-pointer"
            onClick={() => setNewPasswordModalShown(true)}
          >
            New password
          </button>
        </div>
      </header>
      {newPasswordModalShown && <NewPasswordModal closeModal={closeModal} />}
    </>
  );
}

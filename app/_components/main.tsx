"use client";

import { useState } from "react";

export default function Main() {
  const [passwords, setPasswords] = useState<string[]>([]);

  return (
    <main className="flex grow justify-center items-center bg-neutral-800 rounded-md">
      {passwords.length > 0 ? (
        <h2 className="text-xl font-semibold">Si hay contraseñas</h2>
      ) : (
        <h2 className="text-xl font-semibold">No hay contraseñas</h2>
      )}
    </main>
  );
}

interface ModalHeaderInterface {
  onClick?: () => void;
}

export default function ModalHeader({ onClick }: ModalHeaderInterface) {
  return (
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-2xl font-semibold">New Login</h2>
      <button
        className="cursor-pointer font-semibold bg-red-500 rounded-md py-1 px-2"
        onClick={onClick}
      >
        Close
      </button>
    </div>
  );
}

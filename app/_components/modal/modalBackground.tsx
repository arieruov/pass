interface ModalBackgroundInterface {
  onClick?: () => void;
}

export default function ModalBackground({ onClick }: ModalBackgroundInterface) {
  return (
    <div
      className="absolute inset-0 bg-black opacity-50"
      onClick={onClick}
    ></div>
  );
}

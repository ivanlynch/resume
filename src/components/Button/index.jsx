export default function Button({
  icon,
  onClick,
  text,
  outlined,
  fontSize,
  visible = true,
}) {
  return (
    <button
      hidden={!visible}
      type="button"
      className={`hover:cursor-pointer w-full h-16 bg-gradient-to-r from-rose-400 p-1 to-yellow-400 rounded-lg ${fontSize}`}
      onClick={onClick}
    >
      <span
        className={`h-full inline-flex gap-2 items-center justify-center  ${
          outlined ? "bg-gray-800 text-slate-100" : ""
        } w-full rounded-lg`}
      >
        {icon}
        {text}
      </span>
    </button>
  );
}

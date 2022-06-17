

export default function Button({ icon, onClick }) {
  return (
    <div className="hover:cursor-pointer" onClick={onClick}>
      <span className="text-4xl">{icon}</span>
    </div>
  )
}


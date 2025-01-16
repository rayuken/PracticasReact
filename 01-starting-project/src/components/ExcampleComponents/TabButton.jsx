export default function TabButton({
  children,
  onSelect,
  value,
  selectedValue,
}) {
  const handleClick = () => {
    onSelect(value);
  };

  return (
    <li>
      <button
        className={selectedValue === value ? "active" : ""}
        onClick={handleClick}
      >
        {children}
      </button>
    </li>
  );
}

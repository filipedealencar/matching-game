interface Option {
  value: number;
  label: string;
}

interface CustomSelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: Option[];
  onSelect: (selectedValue: number) => void;
}

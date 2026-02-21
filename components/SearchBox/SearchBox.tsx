import css from './SearchBox.module.css'
import type { ChangeEvent } from 'react';

interface SearchBoxProps {
  onSearch: (value: string) => void;
}


export default function SearchBox({ onSearch }: SearchBoxProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <input
      className={css.input}
      placeholder="Search notes"
      onChange={handleChange}
    />
  );
}
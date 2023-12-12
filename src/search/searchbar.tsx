"use client";

import { useState } from "react";
import { Button } from "../base/button";

export interface SearchbarProps
  extends React.ButtonHTMLAttributes<HTMLFormElement> {
}

export const Searchbar: React.FC<SearchbarProps> = (props) => {
  const [value, setValue] = useState<string>()

  return (
    <form {...props}>
      <input onChange={(e) => setValue(e.currentTarget.value)} value={value} />
      <Button type="submit">Submit</Button>
    </form>
  );
};

Searchbar.displayName = "Searchbar";

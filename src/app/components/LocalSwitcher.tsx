"use client";

import { useRouter } from "next/navigation";
import React, { ChangeEvent } from "react";

const LocalSwitcher = () => {
  const router = useRouter();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedLocale = e.target.value;
    router.push(`/${selectedLocale}`);
  };

  return (
    <select
      onChange={onSelectChange}
      className="nav-item text-white/80 hover:text-white bg-transparent border-none outline-none cursor-pointer"
    >
      <option className="text-gray-900" value="ja">
        Japanese
      </option>
      <option className="text-gray-900" value="en">
        English
      </option>
    </select>
  );
};

export default LocalSwitcher;

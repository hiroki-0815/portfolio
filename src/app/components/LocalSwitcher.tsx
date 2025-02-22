"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import React, { ChangeEvent } from "react";

const LocalSwitcher = () => {
  const router = useRouter();
  const locale = useLocale();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedLocale = e.target.value;
    router.push(`/${selectedLocale}`);
  };

  return (
    <select
      onChange={onSelectChange}
      value={locale}
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

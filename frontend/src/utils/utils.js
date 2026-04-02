import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';

// Custom function to use both tailwind merge nad clsx librariex
export const cn = (...inputs) => {
  return twMerge(clsx(inputs));
};

// Funcition to create an array of objects.
const createItemList = (count) => {
    const list = [];
    for(let i = 1; i <= count; i++) {
        list.push({id:i,text:"Item "+i})
    }
    return list;
}

const styles = {
    section: "rounded border border-gray-300 bg-gray-50 p-8 my-8",
    h2: "mb-8 text-2xl text-center",
    button: "rounded border border-gray-500 bg-gray-200 py-2 px-4 disabled:text-gray-300 disabled:border-gray-300",
    input: "rounded border border-gray-500 bg-white placeholder:text-gray-500 px-2 py-2 my-2",
    inputNumber: "rounded border border-gray-500 pl-2 py-1 mx-1 w-15 text-center",
    flexRowBetween: "flex flex-col items-center gap-4 justify-between sm:flex-row",
    flexRowCenter: "flex gap-2 flex-wrap justify-center",
    flexRow: "flex gap-2 flex-wrap items-center my-4"
}

export { createItemList, styles }
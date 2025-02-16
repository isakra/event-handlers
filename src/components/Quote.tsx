import React, { useState } from "react";
import { SHREK_QUOTES } from "@/pages";
type Props = {
  quote: string;
  setQuote: Function;
  quotes: Array<string>;
};

const Quote = ({ quote, setQuote, quotes }: Props) => {
  const getQuote = () => {
    const rand = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[rand]);
  };

  return (
    <div className="flex flex-col items-center gap-10">
      <h1 className="text-3xl font-extrabold text-green-600 italic min-h-20">
        {quote ? `"${quote}"` : "Click the button to get a quote!"}
      </h1>
      <button
        className="bg-green-600 p-4 rounded w-64 font-extrabold hover:bg-green-700 transition"
        onClick={getQuote}
      >
        the button
      </button>
    </div>
  );
};

export default Quote;

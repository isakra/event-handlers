import Header from "@/components/Header";
import Quote from "@/components/Quote";
import { useState } from "react";

export const SHREK_QUOTES = [
  "This is the part where you run away.",
  "Dead broad off the table!",
  "What are you doing in my swamp?!",
  "So, that must be Lord Farquaad's castle. Do you think maybe he's compensating for something?",
  "Can't we just settle this over a pint?",
  "I'm here till Thursday. Try the veal!",
  "Onions have layers. Ogres have layers.",
  "Sure, it's big enough, but look at the location.",
  "That'll do, Donkey. That'll do.",
  "The princess will be up the stairs in the highest room in the tallest tower",
  "It's on my to-do list. Now come on!",
  "Oh, you were expecting Prince Charming.",
  "Hey! I'm no one's messenger boy, all right? I'm a delivery boy.",
  "Look, I'm not the one with the problem, okay? It's the world that seems to have a problem with me.",
  "Better out than in, I always say",
];

export default function Home() {
  const [quotes, setQuotes] = useState(SHREK_QUOTES);
  const [quote, setQuote] = useState("");
  const [text, setText] = useState("");

  const handleOnChange = (value: string) => {
    setText(value);
  };

  const onSubmit = () => {
    if (text.trim() === "") return;
    setQuotes((prev) => {
      const updatedQuotes = [text, ...prev];
      setQuote(text);
      return updatedQuotes;
    });
    alert("Quote added!");
    setText("");
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-10 w-[1000px] bg-green-100 py-20 px-12 rounded-xl shadow-lg text-center">
        <Header />
        <Quote quote={quote} setQuote={setQuote} quotes={quotes} />
        <p className="text-green-500 text-xl max-w-96 font-extrabold overflow-auto ">
          Write your own quote:
        </p>
        <div className="flex flex-col items-center">
          <div className="flex gap-4">
            <input
              className="px-1 py-4 text-black bg-transparent rounded-md outline-green-900 border-green-800 border-2 text-xl shadow-sm focus:bg-green-200 transition"
              type="text"
              value={text}
              onChange={(event) => handleOnChange(event.target.value)}
            />
            <button
              onClick={onSubmit}
              className="bg-green-600 px-5 py-2 rounded hover:bg-green-700 transition"
            >
              Add quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

import StarIcon from "@/assets/icons/star.svg";

const Tape = () => {
  const words = [
    "Performant",
    "Accessible",
    "Secure",
    "Interactive",
    "Scalable",
    "User Friendly",
    "Maintainable",
    "Search Optimized",
    "Usable",
    "Reliable",
  ];

  return (
    <div className="py-16">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 overflow-hidden -rotate-3 py-3">
        <div className="items-center [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none gap-4 items-center animate-move-left [animation-duration:30s]">
            {words.concat(words).map((word, index) => (
              <div className="inline-flex gap-4" key={index}>
                <span className="text-black font-bold text-sm whitespace-nowrap uppercase">
                  {word}
                </span>
                <StarIcon className="size-6 text-black -rotate-10" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tape;

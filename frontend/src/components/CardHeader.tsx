import StarIcon from "@/assets/icons/star.svg";

interface Props {
  title: string;
  description: string;
}

const CardHeader = ({ title, description }: Props) => {
  return (
    <div className="">
      <div className="inline-flex items-center gap-4 font-semibold tracking-wide">
        <StarIcon className="text-emerald-300" />
        <h3 className="font-serif text-xl lg:text-3xl">{title}</h3>
      </div>
      <p className="text-white/70 text-sm md:text-lg py-5">{description}</p>
    </div>
  );
};

export default CardHeader;

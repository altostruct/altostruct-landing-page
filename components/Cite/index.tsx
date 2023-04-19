interface CiteProps {
  cite: string;
  author: string;
  citeIcon?: string;
}

function Cite(props: CiteProps) {
  const { author, cite, citeIcon } = props;
  return (
    <div className="w-[90vw] md:w-auto">
      <div className="flex">
        <img className="w-10 ml-1" src={citeIcon} />
        <img className="w-10 ml-1" src={citeIcon} />
      </div>
      <p className="mt-10 text-2xl">{cite}</p>
      <p className="text-lg mt-4 text-gray-200 ">{`Peter Vesterberg / CEO Saluto AB`}</p>
    </div>
  );
}

export default Cite;

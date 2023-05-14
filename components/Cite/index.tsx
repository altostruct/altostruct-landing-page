import WordCircled from "components/Word-Circled/Word";

interface CiteProps {
  cite: string;
  author: string;
  citeIcon?: string;
}

function Cite(props: CiteProps) {
  const { author, cite, citeIcon } = props;
  return (
    <div className="w-[90vw] border border-gray-600 p-4 flex flex-col  md:w-[30vw]">
      <div className="flex">
        <img alt="cite" className="w-10 ml-1" src={citeIcon} />
        <img alt="cite" className="w-10 ml-1" src={citeIcon} />
      </div>
      <p className="mt-10 text-2xl pb-8">{cite}</p>
      <p className="text-2xl mt-auto mb-2 text-gray-200 ">
        <WordCircled>{author} </WordCircled>
      </p>
    </div>
  );
}

export default Cite;

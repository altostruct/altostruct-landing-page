interface CiteProps {
  cite: string;
  author: string;
  citeIcon?: string;
}

function Cite(props: CiteProps) {
  const {author, cite, citeIcon} = props;
  return (
    <div className="w-[95vw] md:w-auto">
       <div className="flex">
            <img className="w-10 ml-1" src={citeIcon}/>
            <img className="w-10 ml-1" src={citeIcon}/>
        </div>
        <h2 className="mt-10">
            {cite}
        </h2>
        <p className="text-lg mt-4">{`/${author}`}</p>
    </div>
  );
}

export default Cite;

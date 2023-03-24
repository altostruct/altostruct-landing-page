interface CiteProps {
  cite: string;
  author: string;
  citeIcon?: string;
}

function Cite(props: CiteProps) {
  const { author, cite, citeIcon} = props;
  return (
    <div className="w-screen md:w-auto">
       <div className="">
            <img className="md:w-20 w-10 ml-1" src={citeIcon} alt="" />
        </div>
        <h3 className="mt-10">
            {cite}
        </h3>
        <h3 className="text-lg md:text-2xl">{`"${author}"`}</h3>
    </div>
  );
}

export default Cite;

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
        <h2 className="mt-10">
            {cite}
        </h2>
        <p className="text-lg mt-4">{`/${author}`}</p>
    </div>
  );
}

export default Cite;

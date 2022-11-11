//@ts-ignore
import Fade from "react-reveal/Fade";

interface CiteProps {
  cite: string;
  author: string;
}

function Cite(props: CiteProps) {
  const { author, cite } = props;
  return (
    <div>
      <Fade>
        <h3 className="text-lg md:text-2xl">{`"${cite}"`}</h3>
      </Fade>
      <Fade>
        <div className="mt-1">
          <cite>{author}</cite>
        </div>
      </Fade>
    </div>
  );
}

export default Cite;

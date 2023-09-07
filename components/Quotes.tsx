import Link from "next/link";
import { Carousel } from "react-responsive-carousel"

interface QuotesProps {
    data: {
        quote: string;
        author: string;
        role: string;
        company: { name: string; url: string }
    }[]
    counter: number;

}
function Quotes(props: QuotesProps) {
    const { data } = props
    console.log("quote, data:", data)
    const count = props.counter
    return <div className="bg-[#1f1f1f]  border-gray-800 md:p-6 p-1 rounded-xl">
        <Carousel centerMode={false} showThumbs={false} showStatus={false} swipeable showArrows={false} autoPlay className="p-3 pb-0 md:p-6">
            {data.slice(0, count).map((item, index) => {
                return <div key={index} className="text-left ">
                    <div className="flex flex-col gap-6">
                        <div>
                            <div className="flex w-fit">
                                <img alt="cite" className="md:w-8 md:h-12 w-8 h-10" src={"/images/icons/cite.png"} />
                            </div>
                        </div>
                        <cite className="text-md md:text-4xl not-italic">
                            {item.quote}
                        </cite>
                        <div className="text-sm flex justify-between text-gray-200 md:pb-0 pb-10">
                            <div>
                                <p className="font-extrabold">{item.author}</p>
                                <p>{item.role} @ {" "}
                                    {item.company.url &&
                                        <Link href={item.company.url}>
                                            {item.company.name}
                                        </Link>
                                    }
                                    {!item.company.url &&
                                        item.company.name
                                    }
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            })}
        </Carousel>
    </div>
}

export default Quotes
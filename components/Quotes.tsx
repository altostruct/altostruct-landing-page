import Link from "next/link";
import { Carousel } from "react-responsive-carousel"

interface QuotesProps {
    data: {
        quote: string;
        author: string;
        role: string;
        company: { name: string; url: string }
    }[]
}
function Quotes(props: QuotesProps) {
    const { data } = props
    return <div className="bg-[#1f1f1f]  border-gray-800 md:p-6 p-1 rounded-xl">
        <Carousel centerMode={false} showThumbs={false} showStatus={false} swipeable showArrows={false} autoPlay className="p-6">
            {data.map((item, index) => {
                return <div key={index} className="text-left ">
                    <div className="flex flex-col gap-6">
                        <div>
                            <div className="flex w-fit gap-2">
                                <img alt="cite" className="w-6 h-6" src={"/images/icons/citat-icon-67.svg"} />
                                <img alt="cite" className="w-6 h-6" src={"/images/icons/citat-icon-67.svg"} />
                            </div>
                        </div>
                        <cite className="text-xl md:text-4xl not-italic">
                            {item.quote}
                        </cite>
                        <div className="flex justify-between text-gray-200 md:pb-0 pb-10">
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
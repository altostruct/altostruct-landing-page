import classNames from "classnames";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel"
import { ContentfulImage } from "./Contentful";

interface QuotesProps {
    data: {
        quote: string;
        author: string;
        role: string;
        image: any
        company: { name: string; url: string }
    }[]
    counter: number;

}
function Quotes(props: QuotesProps) {
    const { data, counter } = props


    return <div className="relative border-4 border-black p-5">
        <Carousel
            renderIndicator={(ev, isSelected) => {
                return <li className={classNames("w-2 h-2 bg-black inline-block mx-2 rounded-xl cursor-pointer self-center transition-all", { "scale-150": isSelected })} onClick={ev} />
            }}
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
                <>
                    {hasPrev &&
                        <div onClick={onClickHandler} title={label} className="absolute flex top-1/2 w-10 h-10 -translate-y-1/2 rounded-full cursor-pointer z-10 ">
                            <p className="m-auto hidden md:block text-xl">{"<"}</p>
                        </div>
                    }
                </>
            }

            renderArrowNext={(onClickHandler, hasNext, label) =>
                <>
                    {hasNext &&
                        <div onClick={onClickHandler} title={label} className="absolute flex top-1/2 w-10 h-10 right-0 -translate-y-1/2 rounded-full cursor-pointer z-10 ">
                            <p className="m-auto text-xl hidden md:block">{">"}</p>
                        </div>
                    }
                </>
            }


            centerMode={false} showThumbs={false} showStatus={false} swipeable showArrows={true} autoPlay>
            {data.slice(0, counter).map((item, index) => {

                return <div key={index} className="text-left flex-1 md:px-16 p-3 h-full ">
                    <div className="flex flex-col gap-3 h-full ">
                        <cite className="text-sm md:text-3xl flex-1 not-italic pb-2">
                            {'"'}
                            {item.quote}
                            {'"'}
                        </cite>
                        <div className="text-sm flex flex-0 justify-between pb-3 ">
                            <div className="flex items-center gap-2">
                                {(item as any).image &&
                                    <div className="h-16 w-16 overflow-hidden rounded-full">
                                        <ContentfulImage alt="" image={(item as any).image}></ContentfulImage>
                                    </div>
                                }
                                <div>
                                    <p className="font-extrabold">{item.author}</p>
                                    <p>{item.role} @ {" "}
                                        {item.company.url &&
                                            <Link className="underline" href={item.company.url}>
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
                </div>
            })}
        </Carousel>
    </div>
}

export default Quotes
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


    return <div className="relative border p-5">
        {/* <div className="text-[28rem] h-fit absolute left-12 top-32 opacity-10 font-mono" style={{ "lineHeight": "12rem" }}>{'”'}</div> */}
        {/* <div className="text-[14rem] h-fit right-12 absolute -bottom-12 font-mono" style={{ "lineHeight": "0rem" }}>{'”'}</div> */}
        <Carousel
            renderIndicator={(ev, isSelected) => {
                return <li className={classNames("w-2 h-2 bg-black inline-block mx-2 rounded-xl cursor-pointer self-center transition-all", { "scale-150": isSelected })} onClick={ev} />
            }}
            centerMode={false} showThumbs={false} showStatus={false} swipeable showArrows={false} autoPlay>
            {data.slice(0, counter).map((item, index) => {

                return <div key={index} className="text-left flex-1 p-3 h-full ">
                    <div className="flex flex-col gap-3 h-full ">
                        <cite className="text-md   text-3xl flex-1 not-italic pb-2">
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
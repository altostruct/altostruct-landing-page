

import { ContentfulPost } from "utils/contentful";
import WordCircled from "components/Word-Circled/Word";
import Button from "./Button/Button";
import Card from "./Card";

interface ReferenceCasesProps {
    data: ContentfulPost[]
    title?: string
}

function ReferenceCases(props: ReferenceCasesProps) {
    const { data, title = "Case Studies." } = props

    return <Card title={title}>
        <div className="flex flex-col md:h-96 md:flex-row gap-24 md:gap-3 mt-4 divide-gray-800 divide-2">
            {data.slice(0, 3).map((item: any, index: number) => {
                return <div className="md:w-1/3  text-gray-300 flex flex-col md:first:pl-0 md:px-6 md:last:pr-0" key={index}>
                    <div className="flex justify-between">
                        <div className="mb-3">
                            <p className="text-2xl md:text-3xl mb-3">{item.fields.title}</p>
                            <div className="text-xl flex gap-1">
                                {item.fields.tags?.slice(0, 5).map((tag: string, index: number) => {
                                    return <WordCircled key={index} borderCircle>{tag}</WordCircled>
                                })}
                            </div>
                        </div>
                    </div>
                    <p className="text-xl text-ellipsis overflow-hidden flex-grow">{item.fields.shortDescription} </p>
                    <Button type="secondary" link={"/cases/" + item.fields.slug} className="mt-4 ml-auto align-bottom">Läs mer</Button>
                </div>
            })}
        </div>
    </Card>
}

export default ReferenceCases
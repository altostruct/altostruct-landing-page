import { GetStaticPaths } from "next";

const INDUSTRIES = [{
    title: "Foodtech",
    id: "food-tech",
    description: "stra",
    threeReasons: [{
        title: "We are fast",
        description: "WE...."
    }]
},
{
    title: "Gaming",
    id: "gaming",
    description: "stra",
    threeReasons: [{
        title: "We are fast",
        description: "WE...."
    }]
}
]

function Page(props: any) {
    const { industry } = props
    return <pre>{JSON.stringify(industry)}</pre>
}

export async function getStaticProps(context: any) {
    return {
        // Passed to the page component as props
        props: {
            industry: INDUSTRIES.find(industry => industry.id === context.params.id)
        },

    };
}

export const getStaticPaths: GetStaticPaths<any> = async () => {
    return {
        paths: INDUSTRIES.map((industry) => {
            return { params: { id: industry.id } }
        }),
        fallback: false
    }

};

export default Page
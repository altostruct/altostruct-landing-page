import WordCircled from "components/Word-Circled/Word";

interface CiteProps {
    data: {
        BulletPoints: { bulletPoints : any }
    }[]
}

function BulletPoints(props: CiteProps) {
    const { data } = props
    console.log("DATA:", data)
    let arr: any[] = []; // Explicitly specify the type as an array of any
    let finalarr: any[] = []
    data.map((item) => {
        if (item.BulletPoints && item.BulletPoints.bulletPoints !== undefined) {
            arr.push(item.BulletPoints.bulletPoints);
        }
    });
    console.log(arr);
    {arr.map((item, index) => {
        console.log("item:", item)
        item.map((ele: any) => {
            console.log(ele.fields.title)
            finalarr.push(ele.fields.title)
            finalarr.push(ele.fields.description)
    })
    })}
    
    console.log(finalarr)
}

export default BulletPoints;
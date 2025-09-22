type qualityProps={
    id:number;
    img:string;
    header:string;
    paragraph:string;
    learn:string;
}[]
function Quality(){
const Quality:qualityProps=[{
    id:1,
    img:"/Resturant-app/assets/mideel.png",
    header:"Quality Food",
    paragraph:"Contrary to popular belief, Lorem Ipsum is not simply random text",
    learn:"Learn More"
},
{
    id:2,
    img:"/Resturant-app/assets/rocket.png",
    header:"Quality Food",
    paragraph:"Contrary to popular belief, Lorem Ipsum is not simply random text",
    learn:"Learn More"
},
{
    id:3,
    img:"/Resturant-app/assets/monye.png",
    header:"Quality Food",
    paragraph:"Contrary to popular belief, Lorem Ipsum is not simply random text",
    learn:"Learn More"
},
{
    id:4,
    img:"/Resturant-app/assets/delvered.png",
    header:"Quality Food",
    paragraph:"Contrary to popular belief, Lorem Ipsum is not simply random text",
    learn:"Learn More"
},]
return(<>
    <div className="flex flex-col justify-center items-center gap-8 my-12 md:flex-row">
        {Quality.map((qualit)=>(
            <div className="card flex flex-col gap-3 justify-between items-center
            bg-white rounded-2xl shadow-md
            p-5 " key={qualit.id}>
                <img src={qualit.img} alt={qualit.header} loading="lazy" />
                <h2 className="text-3xl">{qualit.header}</h2>
                <p className="text-center">{qualit.paragraph}</p>
                <span className="inline-block hover:text-red-700
                cursor-pointer">{qualit.learn}</span>
            </div>
        ))}
    </div>
</>)
}
export default Quality;
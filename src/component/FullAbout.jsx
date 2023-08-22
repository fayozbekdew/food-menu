import { useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"


const FullAbout = () => {
    const { id } = useParams()

    const url  = 'https://my-json-server.typicode.com/fayozbekdew/food-db/recipes?id=' +  id 
    const { data, error, isPending } = useFetch(url) 
    console.log(data)
    return (
    <div>
         {data && data.map((food) => {
            return(
             <div key={food.id} className="mt-14 pb-10">
                <h1 className="capitalize text-[60px] font-bold text-slate-900 mb-5">{food.title} recipes</h1>
                <div className="flex justify-around">
                <div className="">
                    <span className="flex items-center gap-x-4">
                        <h1 className="text-[30px]">Category:</h1>
                        <p className="text-[30px] uppercase text-green-950 border-solid border-2 py-1 px-3 rounded">{food.region} Food</p>
                    </span>
                    <ul className="w-full max-w-[300px]">
                        <h1 className="text-center text-[40px] font-bold mt-3">Recipes:</h1>
                        {food.ingredients.map((ingred) => {
                            return(
                                <li className="list-decimal w-full italic max-w-[300px] text-left capitalize text-[20px]">{ingred}</li>
                            )
                        })}
                    </ul>
                    <h1 className="capitalize text-[30px] text-left">method of preparation</h1>
                    <p className="w-full max-w-[300px] text-[16px]">{food.method}</p>
                </div>
                <div className=" bg-red-300">
                <img src="" width={400} height={300} alt="" />
                </div>
                </div>
             </div>
            )
         })}
    </div>
  )
}

export default FullAbout
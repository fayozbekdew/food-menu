import { useFetch } from "../hooks/useFetch"
import { Link } from "react-router-dom"


const Asia = () => {
    const {data: foods, error, loading} = useFetch('https://my-json-server.typicode.com/fayozbekdew/food-db/recipes?region=asian')
    return (
      <ul className='flex items-center justify-center mt-14 mb-10 gap-7 flex-wrap '>
      {foods && foods.map((food) => {
          return(
              <div key={food.id} className='w-full bg-teal-200 rounded-[5px] max-w-[300px] flex flex-col border-solid border-black border-2 transition-all ease-in-out duration-[0.5s] hover:scale-[1.03] hover:shadow-2xl hover:shadow-cyan-500'>
          <h1 className='text-[20px] uppercase mt-3 mb-2 font-bold'>{food.title}</h1>
          <span className='flex items-center justify-around'>
              <p>Region Food:</p>
              <p className="uppercase">{food.region}</p>
          </span>
          <span className='flex items-center justify-around'>
              <p>Cooking time:</p>
              <p>{food.cookingTime}</p>
          </span>
          <p className='text-start my-4 pl-2  h-[70px] overflow-hidden'>{food.method}. ....</p>
          <Link to={`/asia/${food.id}`} className='mx-auto rounded-[5px] w-full max-w-[100px] mb-3 border-solid border-2 border-black hover:bg-slate-50'>Read More</Link>
      </div>
          )
      })}
      </ul>
    )
}

export default Asia
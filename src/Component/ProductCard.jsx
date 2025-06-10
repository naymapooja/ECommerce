import { IndianRupee} from "lucide-react";
import React from "react";

function productCard({ image, title, price }) {
    
    return (
        
        <div className="h-max w-96 flex-col-reverse gap-2 rounded-lg bg-cyan-400 p-3">
            <div className="h-[320px] w-full  gap-2 rounded-md bg-stone-100 border-2 border-slate-800 bg-no-repeat bg-center flex justify-center">
             <div className="flex justify-center h-56 mt-14 bg-center" >      
              <img src= {image}alt=" "/>
              </div>  
              </div>
            <h2 className="text-xl text-black font-bold flex-wrap tracking-wide ">{title}</h2>
            <p className="font-semibold text-black text-xl flex items-center flex-nowrap tracking-tighter"><IndianRupee size={20} /> {price}</p>
            <button className="w-full text-gray-50 mt-3 font-semibold text-xl self-center bg-slate-800 py-3 px-3 rounded-md">Buy</button>
            </div>
            
    )
}
export default productCard
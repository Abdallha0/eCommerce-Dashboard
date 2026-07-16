import {  Moon, Sun } from "lucide-react";
import { useContext,useRef } from "react";
import { ThemeContext } from './../../contexts/ThemeContext';


function ThemeButton(){


const {theme,toggleTheme}=useContext(ThemeContext);
const isDark= theme==="dark"


    return(
     <div className="my-8 ">
        
        <div onClick={toggleTheme} className={` w-20  h-auto cursor-pointer transition border dark:bg-slate-900/60 dark:border-slate-800 border-slate-200 rounded-3xl bg-white/90  px-2 py-1 flex ${isDark?"justify-start":"justify-end"}`}>
            <button onClick={toggleTheme} className=" flex justify-center items-center text-center text-black transition rounded-full ">
         {isDark?<Sun className=" text-amber-500 bg-amber-100 border border-amber-500 rounded-full p-2 size-8" /> :<Moon  className=" text-gray-500 border border-cyan-300  bg-cyan-200/60 rounded-full p-2 size-8  " />}
            </button>
        </div>
     </div>
    )
}
export default ThemeButton;
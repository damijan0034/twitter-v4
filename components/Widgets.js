import React, { useState } from "react";
import { ImSearch } from "react-icons/im";
import News from "./News";

export default function Widgets({ articles }) {
    const[articleNum,setArticleNum]=useState(3)
  return (
    <div className="hidden  bg-white md:inline-block ml-8 space-y-5">
      <div className=" md:w-64 py-1.5     bg-white z-50 sticky top-0">
        <div className="flex    relative p-2 items-center bg-white rounded-full">
          <ImSearch className="z-50 text-gray-500" />
          <input
            className="absolute w-[80%] focus:shadow-lg bg-gray-100 focus:bg-white border-gray-700 text-gray-700 pl-11 rounded-full inset-0"
            type="text"
            placeholder="Search Twitter"
          />
        </div>
      </div>

      <div className="text-gray-700 w-[90%] space-y-3 p-2 rounded-xl bg-gray-100">
        <h4 className="font-bold text-xl px-2">What's happening</h4>
        {articles.slice(0,articleNum).map((article) => {
          return (
            <div>
              <News article={article} />
            </div>
          );
        })}
        <button onClick={()=>{setArticleNum(articleNum + 3)}} className="text-blue-300 pl-4 pb-3 hover:text-blue-400" type="">Show More</button>
      </div>
    </div>
  );
}

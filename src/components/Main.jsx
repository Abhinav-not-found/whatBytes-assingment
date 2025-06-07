import React from "react";
import Sidebar from "./Sidebar";
import ProductGrid from "./ProductGrid";

const Main = () => {
  return (
    <div className='h-fit flex gap-8 p-8 px-20 relative'>
      <div className="w-1/5 h-fit sticky top-10">
        <Sidebar />
      </div>
      <div className="w-4/5 h-fit">
        <ProductGrid />
      </div>
    </div>
  );
};

export default Main;

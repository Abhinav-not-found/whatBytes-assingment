import React from "react";
import Sidebar from "./Sidebar";
import ProductGrid from "./ProductGrid";

const Main = () => {
  return (
    <div className='h-fit flex flex-col md:flex-row gap-8 p-8 px-8 md:px-10 lg:px-20 relative'>
      <div className="w-full md:w-2/5 lg:w-1/5 h-fit md:sticky top-10">
        <Sidebar />
      </div>
      <div className="w-full md:w-4/5 lg:w-4/5 h-fit">
        <ProductGrid />
      </div>
    </div>
  );
};

export default Main;

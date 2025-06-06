import React from "react";
import Sidebar from "./Sidebar";
import ProductGrid from "./ProductGrid";

const Main = () => {
  return (
    <div className='h-screen flex gap-8 p-8'>
      <div className="w-1/5 h-fit">
        <Sidebar />
      </div>
      <div className="w-4/5 h-fit">
        <ProductGrid />
      </div>
    </div>
  );
};

export default Main;

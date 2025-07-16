import React from "react";
import Header from "./components/partials/Header";
import Home from "./components/pages/home/Home";

const App = () => {
  return (
    <>
      <div className='min-h-screen bg-gray-50'>
        <Header />
        <Home />
      </div>
    </>
  );
};

export default App;

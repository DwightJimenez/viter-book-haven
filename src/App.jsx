import Home from "./components/pages/home/Home";
import Footer from "./components/partials/Footer";
import Header from "./components/partials/Header";
import Newsletter from "./components/partials/Newsletter";

const App = () => {
  return (
    <>
      <div className='min-h-screen bg-gray-50'>
        <Header />
        <Home />
        <Newsletter />
        <Footer />
      </div>
    </>
  );
};

export default App;

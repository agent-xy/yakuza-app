
import Cars from './components/cars/Cars';
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero'
import Leaders from './components/leaders/Leaders';
import VerticalNavbar from './components/verticalNav/VerticalNavbar';



function App() {
  return (
    <div className="">
      <VerticalNavbar />
      <Hero/>
      <Leaders/>
      <Cars />
      <Footer />
    </div>
  );
}

export default App;

import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import Hero from './components/sections/Hero/Hero';
import About from './components/sections/About/About';
import Products from './components/sections/Products/Products';
import WhyChoose from './components/sections/WhyChoose/WhyChoose';
import Gallery from './components/sections/Gallery/Gallery';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <WhyChoose />
        <Gallery />
      </main>
      <Footer />
    </>
  );
}

export default App;

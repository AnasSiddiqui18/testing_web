import Clients from "./Components/Clients";
import { Navbar, Services } from "./Components/Components_Compiler";
import Contact from "./Components/Contact";
import Portfolio from "./Components/Portfolio";

function App() {
  return (
    <>
      <section>
        <Navbar />
      </section>
      <section className="max-container padding">
        <Services />
      </section>
      <section className="max-container sm:py-20 py-10">
        <Portfolio />
      </section>
      <section className="sm:py-20 py-10">
        <Clients />
      </section>
      <section>
        <Contact />
      </section>
    </>
  );
}

export default App;

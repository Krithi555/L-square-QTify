import Navbar from './components/Navbar/Navbar';
import Hero from "./components/Hero/Hero";
import Section from "./components/Section/Section";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />

      <Section
        title="Top Albums"
        api="https://qtify-backend.labs.crio.do/albums/top"
      />

      <Section
        title="New Albums"
        api="https://qtify-backend.labs.crio.do/albums/new"
      />
      
    </div>
    
  );
}

export default App;

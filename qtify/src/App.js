import Navbar from './components/Navbar/Navbar';
import Hero from "./components/Hero/Hero";
import Section from "./components/Section/Section";
import SongsSection from "./components/SongSection/SongSection";

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

        {/* NEW Songs Section with tabs - no Show All button */}
        <SongsSection />
      
    </div>
    
  );
}

export default App;

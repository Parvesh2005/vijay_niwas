import { Routes, Route } from 'react-router-dom';
import Navbar from './components/shared/Navbar';
import Footer from './components/shared/Footer';

const HomePage = () => <h1 className="text-4xl">Page Content Goes Here</h1>;

function App() {
  return (
    // This div should NOT have the "container" class.
    // It controls the overall page layout, like the sticky footer.
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      {/* The <main> tag holds your page content. THIS is where the container should be. */}
      <main className="flex-grow container px-4 md:px-6 py-8">
        {/*
          Setting up basic routes. Your page components will be rendered here.
          This ensures the content inside is constrained, but the navbar/footer are not.
        */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/rooms" element={<HomePage />} />
          <Route path="/about" element={<HomePage />} />
          <Route path="/contact" element={<HomePage />} />
          <Route path="/book" element={<HomePage />} />
        </Routes>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
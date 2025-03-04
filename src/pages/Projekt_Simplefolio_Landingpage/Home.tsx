
import Header from '../../components/Header';
import Projects from '../../components/Projects';
import Skills from '../../components/Skills';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      <Header />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
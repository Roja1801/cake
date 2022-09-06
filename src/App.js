import './App.css';
import OurCakes from './components/OurCakes';
import Welcome from './components/Welcome';
import WhyUs from './components/WhyUs';
import Clients from './components/Clients';
import Contacts from './components/Contacts';

function App() {
  return (
    <div>
      <Welcome />
      <WhyUs />
      <OurCakes />
      <Clients />
      <Contacts />
    </div>
  );
}

export default App;

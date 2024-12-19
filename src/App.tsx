import './app.css';
import NavbarComponent from './components/Navbar';
import IntroductionComponent from './components/Introduction';
import WhyComponent from './components/Why';
import GalleryComponent from './components/Gallery';
import FooterComponent from './components/Footer';
import RankingComponent from './components/Ranking';
import { motion } from 'motion/react';

function App() {
    return (
        <div
            style={{
                backgroundColor: '#379683',
                color: 'white',
            }}
        >
            <NavbarComponent />
            <IntroductionComponent motion={motion} />
            <WhyComponent motion={motion} />
            <GalleryComponent motion={motion} />
            <RankingComponent motion={motion} />
            <FooterComponent />
        </div>
    );
}

export default App;

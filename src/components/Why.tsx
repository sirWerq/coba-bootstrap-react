import Stack from 'react-bootstrap/Stack';
import image_1 from '../assets/sup_1.png';
import image_2 from '../assets/sup_2.png';
import image_3 from '../assets/sup_3.png';

function WhyComponent({ motion }) {
    return (
        <Stack
            gap={3}
            className='d-flex align-items-center text-dark'
            id='why'
            style={{
                paddingTop: '60px',
                backgroundColor: '#EDF5E1',
            }}
        >
            <motion.div
                initial={{ opacity: 0, translateX: -100 }}
                whileInView={{
                    opacity: 1,
                    translateX: 0,
                }}
                transition={{ duration: 0.5 }}
            >
                <h2 className='p-2'>Why I Created This Website?</h2>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, translateY: 100 }}
                whileInView={{
                    opacity: 1,
                    translateY: 0,
                }}
                transition={{ duration: 1 }}
                className='d-md-flex card-width'
                style={{ gap: '10px' }}
            >
                <div style={{ flex: '1' }}>
                    <img
                        src={image_1}
                        alt='image_1'
                        style={{
                            width: '100%',
                            height: '300px',
                        }}
                    />
                </div>
                <div
                    className='d-flex justify-content-center flex-column'
                    style={{ flex: '2' }}
                >
                    <h3>Just for Fun 😊</h3>
                    <p>
                        " I created this website because I wanted to share
                        something fun with all of you! It's a place where I can
                        explore my favorite characters and anime, while also
                        connecting with like-minded people. Whether you're a fan
                        of anime or just looking for a good time, I hope this
                        website brings a smile to your face. Let's have some fun
                        together! "
                    </p>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, translateY: 100 }}
                whileInView={{
                    opacity: 1,
                    translateY: 0,
                }}
                transition={{ duration: 1 }}
                className='d-md-flex card-width'
                style={{ gap: '10px' }}
            >
                <div style={{ flex: '1' }}>
                    <img
                        src={image_2}
                        alt='image_2'
                        style={{
                            width: '100%',
                            height: '300px',
                        }}
                    />
                </div>
                <div
                    className='d-flex justify-content-center flex-column'
                    style={{ flex: '2' }}
                >
                    <h3>A Place for Your Recommendations 📚</h3>
                    <p>
                        " This website is designed to be your personal
                        recommendation hub. Have you discovered something
                        amazing that you want to share? Or are you looking for
                        new ideas to explore? Whether it's anime, characters, or
                        anything else, I'm here to listen and share those
                        recommendations with you. Let's create a community where
                        we all contribute to each other's joy and discovery! "
                    </p>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, translateY: 100 }}
                whileInView={{
                    opacity: 1,
                    translateY: 0,
                }}
                transition={{ duration: 1 }}
                className='d-md-flex card-width'
                style={{ gap: '10px' }}
            >
                <div style={{ flex: '1' }}>
                    <img
                        src={image_3}
                        alt='image_3'
                        style={{
                            width: '100%',
                            height: '300px',
                        }}
                    />
                </div>
                <div
                    className='d-flex justify-content-center flex-column'
                    style={{ flex: '2' }}
                >
                    <h3>Bringing Characters and Anime to Life 🎬</h3>
                    <p>
                        " One of my biggest passions is bringing anime
                        characters to life. This website is all about
                        celebrating these unique characters and the stories they
                        come from. Whether it's their personalities, their
                        backstories, or simply their awesome adventures, I want
                        to bring attention to the anime worlds that deserve it.
                        It's a place where fans can connect and share their love
                        for these characters. "
                    </p>
                </div>
            </motion.div>
        </Stack>
    );
}

export default WhyComponent;

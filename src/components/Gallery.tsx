import image_1 from '../assets/img_1.jpg';
import image_2 from '../assets/img_2.jpg';
import image_3 from '../assets/img_3.jpg';
import image_4 from '../assets/img_4.jpg';
import image_5 from '../assets/img_5.jpg';
import image_6 from '../assets/img_6.jpg';

function GalleryComponent({ motion }) {
    return (
        <motion.div
            initial={{ opacity: 0, translateY: 100 }}
            whileInView={{
                opacity: 1,
                translateY: 0,
            }}
            transition={{ duration: 1 }}
            animate={{}}
            className='d-flex flex-column align-items-center gap-4 justify-content-center'
            id='candidate'
            style={{
                paddingTop: '60px',
            }}
        >
            <h1>Candidate</h1>
            <div className='row' style={{ margin: '0', padding: '0' }}>
                <div className='col-lg-4 col-md-12 mb-4 mb-lg-0'>
                    <img
                        src={image_1}
                        className='w-100 shadow-1-strong rounded mb-4'
                        alt='Boat on Calm Water'
                    />

                    <img
                        src={image_2}
                        className='w-100 shadow-1-strong rounded mb-4'
                        alt='Wintry Mountain Landscape'
                    />
                    <img
                        src={image_4}
                        className='w-100 shadow-1-strong rounded mb-4'
                        alt='Boat on Calm Water'
                    />
                </div>

                <div className='col-lg-4 mb-4 mb-lg-0'>
                    <img
                        src={image_3}
                        className='w-100 shadow-1-strong rounded mb-4'
                        alt='Mountains in the Clouds'
                    />
                </div>

                <div className='col-lg-4 mb-4 mb-lg-0'>
                    <img
                        src={image_5}
                        className='w-100 shadow-1-strong rounded mb-4'
                        alt='Waves at Sea'
                    />

                    <img
                        src={image_6}
                        className='w-100 shadow-1-strong rounded mb-4'
                        alt='Yosemite National Park'
                    />
                </div>
            </div>
        </motion.div>
    );
}

export default GalleryComponent;

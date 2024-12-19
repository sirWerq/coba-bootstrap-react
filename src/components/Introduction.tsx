function IntroductionComponent({ motion }) {
    return (
        <div
            className='d-flex align-items-center justify-content-center vh-100'
            id='introduction'
        >
            <motion.div
                initial={{ opacity: 0, translateX: -100 }}
                whileInView={{
                    opacity: 1,
                    translateX: 0,
                }}
                transition={{ duration: 0.5 }}
            >
                <div className='text-center'>
                    <h1 style={{ fontSize: '50px' }}>TERLOPE</h1>
                    <p>
                        "Welcome to Terlope - Dive into a world where the
                        creator's ultimate waifus come to life! Explore their
                        favorites, curated with passion and dedication just for
                        you."
                    </p>
                </div>
            </motion.div>
        </div>
    );
}

export default IntroductionComponent;

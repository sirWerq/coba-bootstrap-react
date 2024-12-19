function RankingComponent({ motion }) {
    return (
        <motion.div
            initial={{ opacity: 0, translateX: -100 }}
            whileInView={{
                opacity: 1,
                translateX: 0,
            }}
            transition={{ duration: 0.5 }}
            className='vh-100 text-dark d-flex flex-column align-items-center gap-4'
            style={{ backgroundColor: '#EDF5E1', paddingTop: '60px' }}
        >
            <h2 className='mb-4'>Ranking</h2>
            <div
                className='card'
                style={{
                    width: '70vw',
                }}
            >
                <div className='card-body'>Akiyama Mizuki</div>
            </div>
            <div
                className='card'
                style={{
                    width: '70vw',
                }}
            >
                <div className='card-body'>Oumae Kumiko</div>
            </div>
            <div
                className='card'
                style={{
                    width: '70vw',
                }}
            >
                <div className='card-body'>Yoroizuka Mizore</div>
            </div>
            <div
                className='card'
                style={{
                    width: '70vw',
                }}
            >
                <div className='card-body'>Kurokawa Akane</div>
            </div>
            <div
                className='card'
                style={{
                    width: '70vw',
                }}
            >
                <div className='card-body'>Tokisaki Kurumi</div>
            </div>
            <div
                className='card'
                style={{
                    width: '70vw',
                }}
            >
                <div className='card-body'>Touma Kazusa</div>
            </div>
        </motion.div>
    );
}

export default RankingComponent;

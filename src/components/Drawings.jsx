import Card from '../UI/Card'

const Drawings = ({image, path}) => {
    return (
    <Card className='drawings'>
        <div className="drawings__img">
            <img src={image} alt="Drawing in Python" />
        </div>
        <div className="drawings__socials">
            {
                path.map(({link}) => {
                    return <a href={link} className="btn sm" rel='noreferrer noopener' target="_blank">Lihat selengkapnya</a>
                })
            }
        </div>
    </Card>
    )
}

export default Drawings
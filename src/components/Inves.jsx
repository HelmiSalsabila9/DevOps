import Card from '../UI/Card'

const Inves = ({image, title, info, path}) => {
  return (
    <Card className='inves'>
        <div className="inves__img">
            <img src={image} alt={title} />
        </div>
        <h3>{title}</h3>
        <p>{info}</p>
        <div className="inves__socials">
            {
                path.map(({link}) => {
                    return <a href={link} rel='noreferrer noopener' target="_blank">Download Sekarang</a>
                })
            }
        </div>
    </Card>
  )
}

export default Inves
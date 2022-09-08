import Card from '../UI/Card'

const Hosting = ({image, title, info, path}) => {
  return (
    <Card className='hosting'>
        <div className="hosting__img">
            <img src={image} alt={title} />
        </div>
        <h3>{title}</h3>
        <p>{info}</p>
        <div className="hosting__socials">
            {
                path.map(({link}) => {
                    return <a href={link} rel='noreferrer noopener' target="_blank">Hosting sekarang</a>
                })
            }
        </div>
    </Card>
  )
}

export default Hosting
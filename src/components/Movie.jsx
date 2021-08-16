import movie from '../assets/Higashi.mp4'

function Test() {
    
    return (
        <video className="video" loop="loop" autoPlay="autoplay" muted="muted">
            <source src={movie} type="video/mp4" />
        </video>
    )
}

export default Test;
import { Link } from "react-router-dom";
import error404image from '../img/404.jpg'

const Page404 = () => {
    return (
        <div>
            <img style={{ display: 'block', width: "300px", height: "300px",objectFit: 'contain', margin: "0 auto"}} src={error404image} alt='Error'/>
            <p style={{'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px'}}>Page doesn't exist</p>
            <Link style={{'display': 'block', 'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px', 'marginTop': '30px'}} to="/">Back to main page</Link>
        </div>
    )
}

export default Page404;
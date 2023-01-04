import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faBolt, faGear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css';
import img from './girl1.png';
import {Search} from "./search.js";
export function Header() {
    return (
        <>
        <div className='container-fluid'>
            <div className='container-fluid'>
                <div className='row mt-2'>
                    <div className='col-lg-1 mt-2'>
                        <FontAwesomeIcon icon={faBolt} className='iche1 mt-3 text-light p-2 bg-primary' />
                    </div>
                    <div className='col-lg-8'>&nbsp;</div>
    
                    <div className='col-lg-2 d-flex'>
                    <FontAwesomeIcon icon={faBell} className=" mt-4 iche2 p-2 text-secondary" />
                        <img src={img} className='prhe1 ml-3' />
                        <h6 className='namehe1 mt-4 ml-3'><b>KIRUTHIKA</b><br /><span className='namehe2'>Welcome.!</span></h6>
                        <FontAwesomeIcon icon={faGear} className=" mt-4 ml-4 iche2 p-2 text-secondary" />
                    </div>
                </div>
            </div>
            </div>
            <Search/>
        </>
    );
}
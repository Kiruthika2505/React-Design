
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';
import './tab.css';

import { Index } from './index';
export function Tab() {
    return (
        <>
            <div className='container-fluid color'>
                <div className='container-fluid bg-light'>
                <div className='row'>
                    <div className='col-lg-1 p-2 d-flex'>
                        <p className="txt4idx1 ml-2">All Leads</p>
                        &nbsp;&nbsp;
                        <FontAwesomeIcon icon={faCircleXmark} className="ic4idx1" />
                    </div>
                    <div className='col-lg-4 p-2 d-flex color'>
                        <p className="txt4idx1 ml-4">Add new Leads</p>
                        &nbsp;&nbsp;
                        <FontAwesomeIcon icon={faCircleXmark} className="ic4idx1" />
                   
                        <p className="txt4idx1 ml-4 color">Edit Lead-Tag</p>
                        &nbsp;&nbsp;
                        <FontAwesomeIcon icon={faCircleXmark} className="ic4idx1" />
                    </div>
                    <div className='col-lg-7 color'>&nbsp;</div>
                
                </div>
            </div>
            </div>
            <Index />
        </>
    );
}
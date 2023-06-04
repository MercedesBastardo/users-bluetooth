import { useEffect, useState } from 'react';


const Alert = ({ isVisible, msg }) => {
    const [show, setShow] = useState(false);
    useEffect(() => {
        setShow(isVisible)
      }, [isVisible])
        if(show){
        return (
            <div>
                <h2>{msg.msg}</h2>
            </div>
        ); 
        }
};

export default Alert;
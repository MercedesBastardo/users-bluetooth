import { useEffect, useState } from 'react';


  const BluetoothComponent = () => {
    
    const connectToDevice = () => {
      navigator.bluetooth.requestDevice({
        
        optionalServices: ['battery_service'] // Required to access service later.
      })
      .then(device => { console.log(device) })
      .catch(error => { console.error(error); });
        
    }

    return (
      <div className="App">
       
      
          <button onClick={connectToDevice}>Connect to a Bluetooth device</button>
          
    
      </div>
    );
};

export default BluetoothComponent;
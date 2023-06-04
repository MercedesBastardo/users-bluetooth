import { useEffect, useState } from 'react';


  const BluetoothComponent = () => {
    
    const connectToDevice = async() => {
      // Request the Bluetooth device through browser
const device = await navigator.bluetooth.requestDevice({
  acceptAllDevices: true,
  optionalServices: ["battery_service", "device_information"],
});
    }

    return (
      <div className="App">
       
      
          <button onClick={connectToDevice}>Connect to a Bluetooth device</button>
          
    
      </div>
    );
};

export default BluetoothComponent;
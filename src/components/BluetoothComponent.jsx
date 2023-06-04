import { useEffect, useState } from 'react';


  const BluetoothComponent = () => {
    
    const connectToDevice = () => {
      navigator.bluetooth.requestDevice({  acceptAllDevices: true,
        optionalServices: ['battery_service'] })
      .then(device => device.gatt.connect())
      .then(server => {
        // Getting Battery Service…
        return server.getPrimaryService('battery_service');
      })
      .then(service => {
        // Getting Battery Level Characteristic…
        return service.getCharacteristic('battery_level');
      })
      .then(characteristic => {
        // Reading Battery Level…
        return characteristic.readValue();
      })
      .then(value => {
        console.log(`Battery percentage is ${value.getUint8(0)}`);
      })
      .catch(error => { console.error(error); });
        
    }

    return (
      <div className="App">
       
      
          <button onClick={connectToDevice}>Connect to a Bluetooth device</button>
          
    
      </div>
    );
};

export default BluetoothComponent;
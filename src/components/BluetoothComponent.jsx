import { useEffect, useState } from 'react';


  const BluetoothComponent = () => {
    
    const connectToDevice = async() => {
      // Request the Bluetooth device through browser
const device = await navigator.bluetooth.requestDevice({
//   optionalServices: ["battery_service", "device_information"],
  acceptAllDevices: true,
});
// Connect to the GATT server
// We also get the name of the Bluetooth device here
let deviceName = device.gatt.device.name;
const server = await device.gatt.connect(); 
// Getting the services we mentioned before through GATT server
const batteryService = await server.getPrimaryService("battery_service");
const infoService = await server.getPrimaryService("device_information");
// Getting the current battery level
const batteryLevelCharacteristic = await batteryService.getCharacteristic(
  "battery_level"
);
// Convert recieved buffer to number
const batteryLevel = await batteryLevelCharacteristic.readValue();
const batteryPercent = await batteryLevel.getUint8(0);
// Getting device information
// We will get all characteristics from device_information
const infoCharacteristics = await infoService.getCharacteristics();
console.log(infoCharacteristics);
let infoValues = [];
const promise = (resolve, reject) => {
  infoCharacteristics.forEach(async (characteristic, index, array) => {
    // Returns a buffer
    const value = await characteristic.readValue();
    console.log(new TextDecoder().decode(value));
    // Convert the buffer to string
    infoValues.push(new TextDecoder().decode(value));
    if (index === array.length - 1) resolve();
  });
  return infoValues
};
console.log(promise())
}

    return (
      <div className="App">
       
      
          <button onClick={connectToDevice}>Connect to a Bluetooth device</button>
          
    {/* Device Name - ${promise.deviceName}<br />
    Battery Level - ${promise.batteryPercent}%<br />
    Device Information:
    <ul>
      ${infoValues.map((value) => `<li>${promise.value}</li>`).join("")}
    </ul>  */}

      </div>
    );
};

export default BluetoothComponent;
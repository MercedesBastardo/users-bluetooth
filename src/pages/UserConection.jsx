
import BluetoothComponent from '../components/BluetoothComponent';

const UserConection = () => {

    const user = localStorage.getItem('user')
    return (
        <div>
            <h1>Bienvenid@ {user}</h1>
            <h3>Queres conectarte a bluetooth?</h3>
            <h3>Estas en la app correcta</h3>
            <BluetoothComponent/>
        </div>
    );
};

export default UserConection;
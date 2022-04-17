import logo from './logo.svg';
import './App.css';
import ProfilePhoto from './Component/Profile.js/ProfilePhoto';
import FullName from './Component/Profile.js/FullName';
import Address from './Component/Profile.js/Address';

function App() {
  return (
    <div className="App">
      <div>
        <ProfilePhoto/>;
        <FullName/>;
        <Address/>;

      </div>
     
    </div>
  );
}

export default App;

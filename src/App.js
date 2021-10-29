import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Routing from './components/Routing/Routing';
import AuthProvider from './Context/AuthProvider';
import "react-toastify/dist/ReactToastify.css";
import swal from 'sweetalert';

import { toast } from "react-toastify";
 toast.configure();
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routing />
      </AuthProvider>
    </div>
  );
}

export default App;

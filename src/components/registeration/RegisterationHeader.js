import { Link } from "react-router-dom";
import "./registeration.css";

const RegisterationHeader = () => {
    return (
        <footer className="registeration-header">
       <Link to="/">
       <img src={require("../../assets/logo.png")} alt="Logo" />
       </Link>
      </footer>
    );
  };
  
  export default RegisterationHeader;
  
import { Link } from "react-router-dom";

function BotonNavegacion({ children, to, className = "" }){

    return (
        <Link to={to} className="flex justify-center">
          <button
            className={ `${className}`}
          >
            {children}
          </button>
        </Link>
      );
}
export default BotonNavegacion
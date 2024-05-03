import PaymentsAdd from "./PaymentsAdd";
import ReactDOM from "react-dom/client";

const mount = (el : Element) : void => {
ReactDOM.createRoot(el).render(<PaymentsAdd/>);
}
export default mount;
import PaymentsList from "./PaymentsList";
import ReactDOM from "react-dom/client";

const mount = (el : Element) : void => {
ReactDOM.createRoot(el).render(<PaymentsList/>);
}
export default mount;
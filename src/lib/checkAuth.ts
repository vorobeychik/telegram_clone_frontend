import {useDispatch} from "react-redux";
import {changeAuthorization, changeUserEmail} from "../redux/action";

export function useCheckAuth() {

    const dispath = useDispatch()

    const email = localStorage.getItem('email');

    if(!email){
        dispath(changeAuthorization(true))
        dispath(changeUserEmail(email))

    }

    return

}
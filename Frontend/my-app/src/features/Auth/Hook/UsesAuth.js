import { setUser, setError, setLoading } from "../State/Auth.sllice";
import { RegisterApi } from "../services/auth.api";
import { useDispatch } from "react-redux"

export const UseAuth = () => {
    const dispatch = useDispatch()

    async function HandleRegister({ email, contact, password, fullname }) {
        const data = await RegisterApi({ email, contact, password, fullname })
        dispatch(setUser(data.user))
        return data.user
    }
    return { HandleRegister }

}
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../features/userInfoSlice";
import { User } from "../type/user";

export const useUserInfoActions = () => {

    const dispatch = useDispatch();
    const router = useRouter();

    const handleLoginSync = (userData:User, accessToken?:string) => {
        dispatch(loginSuccess({
            user : userData,
            accessToken : accessToken
        }));

        router.push("/menus");
        router.refresh();
    }
    return handleLoginSync;
};
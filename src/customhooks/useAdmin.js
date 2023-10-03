import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth"
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
    const {user} = useAuth();
    const myAxios = useAxiosSecure();

    const {data : isAdmin = null, isLoading: isAdminLoading} = useQuery({
        queryKey: ['isAdmin', user?.email],
        queryFn: async () => {
            const res = await myAxios(`/users/admin/${user.email}`);
            console.log('user is admin ? :', res.data);

            return res.data.admin;
        }
    })
    console.log(isAdmin);
    return {isAdmin,isAdminLoading}



    
}

export default useAdmin;
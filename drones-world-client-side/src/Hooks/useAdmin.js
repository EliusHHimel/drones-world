import { useEffect, useState } from "react";
import useFirebase from "./useFirebase";


const useAdmin = () => {
    const [admin, setAdmin] = useState(false);
    const { user } = useFirebase();
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setIsLoading(true);
        fetch(`https://peaceful-reaches-96347.herokuapp.com/users`)
            .then(res => res.json())
            .then(data => {
                const foundAdmin = data.find(admin => user.email === admin.email && admin.role === 'admin');
                if (foundAdmin) {
                    setAdmin(true);
                    setIsLoading(false);
                }
            })
    }, [user.email]);

    return {
        admin,
        isLoading
    };
}

export default useAdmin;
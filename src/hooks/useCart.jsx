import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useCart = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        enabled: !loading,
        queryFn: async () => {
            if (!user) {
                return [];
            }
            const res = await axiosSecure(`/carts?email=${user?.email}`);
            return res.data;
        },
        retry: 3
    });

    return [cart, refetch];
};

export default useCart;
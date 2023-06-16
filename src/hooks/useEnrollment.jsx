import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useEnrollment = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: enrolledClass = [] } = useQuery({
        queryKey: ['enrolledClasses', user?.email],
        enabled: !loading,
        queryFn: async () => {
            if (!user) {
                return [];
            }
            const res = await axiosSecure(`/enrolledClasses?email=${user?.email}`);
            return res.data;
        },
        retry: 3
    });

    return [enrolledClass, refetch];
};

export default useEnrollment;
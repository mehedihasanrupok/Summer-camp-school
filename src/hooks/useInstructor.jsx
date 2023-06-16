import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useInstructor = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    // use axios secure with react query
    const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
        queryKey: ['isInstructor', user?.email],
        enabled: !loading,
        queryFn: async () => {
            if (!user) {
                return false;
            }
            const res = await axiosSecure.get(`/users/instructor/${user?.email}`);
            return res.data.instructor;
        },
        retry: 3
    });

    return [isInstructor, isInstructorLoading];
};

export default useInstructor;
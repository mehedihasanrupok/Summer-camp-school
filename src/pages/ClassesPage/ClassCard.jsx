import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useCart from "../../hooks/useCart";
import useEnrollment from "../../hooks/useEnrollment";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const ClassCard = ({ classData }) => {
    const { _id, image, className, instructorName, instructorId, instructorEmail, availableSeats, price } = classData;
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    const [cart, refetch] = useCart();
    const [enrolledClass] = useEnrollment();
    const navigate = useNavigate();
    const location = useLocation();

    const handleAddToCart = () => {
        if (user && user.email) {
            const existingCartItem = cart.find(item => item.classId === _id);
            if (existingCartItem) {
                toast.error(`${className} class has already added on the cart!`);
                return;
            }

            const existingEnrolledItem = enrolledClass.find(item => item.classId === _id);
            if (existingEnrolledItem) {
                toast.error(`You have already enrolled to ${className} class!`);
                return;
            }

            const cartItem = { classId: _id, image, className, price, instructorId, instructorEmail, email: user.email };
            axiosSecure.post('/carts', cartItem)
                .then(data => {
                    if (data.data.insertedId) {
                        refetch();
                        toast.success(`${className} class added on the cart!`);
                    }
                });
        } else {
            Swal.fire({
                title: 'Please login to select the class', 
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } });
                }
            });
        }
    };

    return (
        <div className={`card ${availableSeats === 0 ? 'bg-red-500' : 'bg-base-100'} shadow-xl`}>
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body ml-2">
                <h2 className="card-title">Class Name: {className}</h2>
                <p>
                    <span className="font-medium">Instructor Name:</span> {instructorName} <br />
                    <span className="font-medium">Available Seats:</span> {availableSeats} <br />
                    <span className="font-medium">Price:</span> ${price}
                </p>
                <div className="card-actions">
                    <button onClick={handleAddToCart} className="btn btn-primary" disabled={isAdmin || isInstructor || availableSeats === 0}>Select Class</button>
                </div>
            </div>
        </div>
    );
};

export default ClassCard;
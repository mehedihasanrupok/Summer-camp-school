import { Fade } from 'react-awesome-reveal';

const PopularCard = ({ classData }) => {
    const { image, className, instructorName, enrollCount, availableSeats, price } = classData;

    return (
        <div className="card bg-base-100 shadow-xl group">
            <figure className="">
                <img src={image} alt="Shoes" className="w-full h-52 group-hover:scale-125 transition" />
            </figure>
            <div className="card-body">
                <Fade cascade damping={1e-1} triggerOnce={true}>
                    <h2 className="card-title">Class Name: {className}</h2>
                    <p>
                        <span className="font-medium">Instructor Name:</span> {instructorName} <br />
                        <span className="font-medium">Enrolled Students:</span> {enrollCount} <br />
                        <span className="font-medium">Available Seats:</span> {availableSeats} <br />
                        <span className="font-medium">Price:</span> ${price}
                    </p>
                </Fade>
                <div className="card-actions">
                    
                </div>
            </div>
        </div>
    );
};

export default PopularCard;
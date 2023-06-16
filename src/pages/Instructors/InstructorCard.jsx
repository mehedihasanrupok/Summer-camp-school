import React from 'react';


const InstructorCard = ({ instructor }) => {
    // const [axiosSecure] = useAxiosSecure();

    // const { data: instructorInfo = [] } = useQuery(['instructor-info', instructor.name], async () => {
    //     const res = await axiosSecure.get(`/instructor-stats/${instructor.name}`);
    //     return res.data;
    // });
    return (
        <div className="card bg-base-100 shadow-xl">
        <div className="px-10 pt-10">
            <img src={instructor.image} alt="Shoes" className="rounded-xl" />
        </div>
        <div className="card-body items-center text-center">
            <h2 className="card-title">{instructor.name}</h2>
            <p>{instructor.email}</p>
            {/* <p>No. of class take: {instructorInfo[0]?.count || 0}</p>
            <p>Class names: {instructorInfo[0]?.classes.join(', ')}</p> */}
            <div className="card-actions">
                <button className="btn btn-primary">See Classes</button>
            </div>
        </div>
    </div>
    );
};

export default InstructorCard;
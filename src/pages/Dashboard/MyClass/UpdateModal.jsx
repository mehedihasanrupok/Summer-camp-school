const UpdateModal = ({ singleClassData, handleUpdate }) => {
    const handleOnSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const availableSeat = form.availableSeat.value;
        const price = form.price.value;
        const updatedInfo = { availableSeat, price };

        handleUpdate(singleClassData, updatedInfo);
        form.reset();
    };

    return (
        <div>
            <input type="checkbox" id="my-modal-1" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-1" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Class Name: {singleClassData.className}</h3>
                    <form onSubmit={handleOnSubmit}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="number" name="availableSeat" defaultValue={singleClassData.availableSeats} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="number" name="price" defaultValue={singleClassData.price} className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-5">
                            <input onClick={() => document.getElementById('my-modal-1').checked = false} className="btn btn-primary" type="submit" value="Submit" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateModal;
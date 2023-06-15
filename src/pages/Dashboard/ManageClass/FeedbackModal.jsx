const FeedbackModal = ({ singleClassData, handleFeedback }) => {
    const handleOnSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const feedback = form.feedback.value;

        handleFeedback(singleClassData, feedback);
        form.reset();
    };
    
    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Class Name: {singleClassData.className}</h3>
                    <form onSubmit={handleOnSubmit}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Type Feedback</span>
                            </label>
                            <textarea name="feedback" className="textarea textarea-bordered h-24" required></textarea>
                        </div>
                        <div className="form-control mt-5">
                            <input onClick={() => document.getElementById('my-modal-3').checked = false} className="btn btn-primary" type="submit" value="Send Feedback" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FeedbackModal;
import '../Contact/ContactUs.css';
function SubmitForm() {
  return (
    <div className="submit-from">
        <h4 className="third-text text">Contact Us</h4>
        <form action="">
            <div className="input-box">
                <input type="text" className="input" required/>
                <label for="">Name</label>
            </div>
            <div className="input-box">
                <input type="email" className="input" required/>
                <label for="">Email</label>
            </div>
            <div className="input-box">
                <input type="tel" className="input" required/>
                <label for="">Phone</label>
            </div>
            <div className="input-box">
                <textarea name="" className="input" cols="30" rows="10" required></textarea>
                <label for="">Message</label>
            </div>
            <input type="submit" value="Submit" className="btn"/>
        </form>
    </div>
  )
}

export default SubmitForm;
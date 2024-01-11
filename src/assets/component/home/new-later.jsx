
import "./css/news-later.css"
function News_Later(){
    return <>
     <div className="cta" id="newslater">
        <div className="container">

          <div className="title-wrapper">
            <h2 className="cta-title">Subscribe to our News-Later.</h2>

            <p className="cta-text">
              Enter your email to create or restart your membership.
            </p>
          </div>

          <form action="" className="cta-form">
            <input type="email" name="email" required placeholder="Enter your email" className="email-field"/>

            <button type="submit" className="cta-form-btn">Get started</button>
          </form>

        </div>
      </div>
    </>
}

export default News_Later;
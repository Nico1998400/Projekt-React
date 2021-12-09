import "./Testimonials.css";
import Text from "../common/Text";
import Api from "../common/Api";

function Testimonials() {
    return (
      <div className="all-wrapper" id="testimonials">
        <div className="all-section">
          <div className="testimonial-left">
            <Text title="Erfarenhet"/>
            <div className="header-to-subtitle">
            <Text subtitle2="Utbildningar"/>
            <Api page="utbildningar"/>
            </div>
            <div className="header-to-subtitle">
            <Text subtitle2="Anställningar"/>
            <Api page="anstallningar"/>
            </div>
            </div>
            <div className="testimonial-rigth">
            <Text title="Referenser"/>
            <div className="header-to-subtitle">
            <Api page="referenser"/>
            </div>
            </div>
        </div>
        </div>
    );
  }
  
  export default Testimonials;
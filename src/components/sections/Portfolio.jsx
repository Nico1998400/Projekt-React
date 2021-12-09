import "./Portfolio.css";
import Text from "../common/Text";
import Api from "../common/Api";
import Button from "../common/Button";

function Portfolio() {

    return (
      <div className="all-wrapper" id="portfolio">
        <div className="all-section">
          <div className="portfolio-left">
            <Text title="Bildgalleri"/>
            <div className="header-to-subtitle">
            <Text subtitle2="Körkort"/>
            <Api page="korkot"/>
            </div>
            <div className="header-to-subtitle">
            <Text subtitle2="Certifikat"/>
            <Api page="certifikat"/>
            </div>
            <div className="button-portfolio">
            <Button filled><a className="a-button" href="/Portfoliopage">Till Bildgalleri</a></Button>
            </div>
            </div>
            <div className="portfolio-rigth">
              <div className="portfolio-pictures">
              <figure className="image-item-1">
              <img
              src="https://scontent.fmmx3-1.fna.fbcdn.net/v/t1.15752-9/263065628_314406823840945_8354195487777132526_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=ae9488&_nc_ohc=bnUpVsTGq6sAX-x2mWH&_nc_ht=scontent.fmmx3-1.fna&oh=7d68af6f170d16bfde49f01e6c137d4e&oe=61CCA47A"
              className="portfolio-image" alt="image1"/>
              </figure>
              <figure className="image-item-2">
              <img
              src="https://scontent.fmmx3-1.fna.fbcdn.net/v/t1.15752-9/262784252_321902689484583_5407689443426038946_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=ae9488&_nc_ohc=MxK1wumRO4EAX8lnYMv&_nc_ht=scontent.fmmx3-1.fna&oh=18ba550d534117eee6a77a4a7f9bd040&oe=61CAE254"
              className="portfolio-image" alt="image2"/>
              </figure>
              <figure className="image-item-3">
              <img
              src="https://scontent.fmmx3-1.fna.fbcdn.net/v/t1.15752-9/261939761_304652954852920_8468103170855686695_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=ae9488&_nc_ohc=E7AiMI-9ZqIAX9iX2Wc&_nc_ht=scontent.fmmx3-1.fna&oh=87354c9beac52b0e5c583f216a2c7f0f&oe=61CB9B24"
              className="portfolio-image" alt="image3"/>
              </figure>
              <figure className="image-item-4">
              <img
              src="https://scontent.fmmx3-1.fna.fbcdn.net/v/t1.15752-9/261953758_3218393308382022_4596030797057828301_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=ae9488&_nc_ohc=PnbACqnZWtkAX8NhDLp&_nc_ht=scontent.fmmx3-1.fna&oh=05d0eb6e0e55345f45c2d646942c5d19&oe=61CCB66B"
              className="portfolio-image" alt="image4"/>
              </figure>
              </div>
            </div>
            </div>
        </div>
        
    );
  }
  export default Portfolio;

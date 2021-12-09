import "./About.css";
import Button from "../common/Button";
import Text from "../common/Text";
import Api from "../common/Api";

function About() {
    return (
      <div className="all-wrapper" id="about">
        <div className="all-section">
          <div className="about-left">
            <Text title="Info"/>
            <div className="header-to-subtitle">
            <Api page="info"/>
            </div>
            </div>
            <div className="about-rigth">
            <Text title="Om mig"/>
            <p>Mitt namn är Nicolai Stahl och jag är 22 år gammal. Bor i Helsingborg tillsammans med min sambo. Jag kommer ursprungligen från Danmark men föddes och uppväxt i Sverige. Det är en väldigt stor fördel då jag talar flyttande Danska, Svenska och Engelska. <br/> <br/>Mitt stora intresse här i livet är bilar samt att resa mycket och uppleva nya saker. Det som är bra med med mitt bilintresse är att jag har lärt mig väldigt mycket använda händerna och tänka logiskt.Som person är jag väldigt framåtvänd och älskar att lära mig nya saker som jag kan ta del av och använda längre fram livet. Ifall det inte finns en lösning försöker jag alltid att tänka till en extra gång utanför boxen för att uppnå ett bra resultat. När det kommer till ansvar kan jag ta egna beslut om det skulle behövas, jag är väldigt bra på att märka av situation av vad som är rätt eller fel.Varför ni ska välja mig är föratt jag lägger fullt fokus på arbetet och är väldigt positiv samt försöker göra så att alla ska trivas tillsammans.</p>
            <a href="https://www.linkedin.com/in/nicolai-stahl-62758a1b6/">
            <Button filled>LinkedIn</Button>
            </a>
            </div>
        </div>
        </div>
    );
  }
  
  export default About;

  
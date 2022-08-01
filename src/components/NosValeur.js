import img1 from './images/18771.png';
import img2 from './images/Kannan-Future-Customer-Service-AI-Artificial-Intelligence-1200x627-1200x627.png';
import img3 from './images/Component17–6.png';

import img1Solution from './images/MaskGroup10115@2x.png';
import img2Solution from './images/Group 14382.png';
import img3Solution from './images/senses_IA.png';
import backgroundImg from './images/Groupe_19186.png';




const NosValeur = () => {

  return (
    <div className="part2 container">
      <div class="col">
        <div class="row">
          <h1 class="text-center" id="title1">Nos valeurs & engagements </h1>
        </div>
        <div class="row">
          <h2 class="text-center text-sm-left" id="title2">Notre clé de réussite</h2>
        </div>
        <div class="col">

        </div>
      </div>
      <div className="p1">

        <p>Nos engagements et nos valeurs nous définissent.<br></br>Ils sont le moteur de notre développement et la clé de notre réussite.<br></br>
          Nous déposons nos savoir-faire et notre expertise au profit de nos clients.<br></br>
          Nous sommes engagés de digitaliser notre quotidien pour un avenir meilleur.</p>
      </div>

      <div className="images">

        <div class="container">
          <div class="row">
            <div class="col" id="hoverImg1">
              <img className="img" src={img1} alt="img1" />
            </div>
            <div class="col" id="hoverImg2">
              <img className="img" src={img2} alt="img2" />
            </div>
            <div class="col" id="hoverImg1">
              <img className="img" src={img3} alt="img3" />
            </div>
          </div>
        </div>
      </div>

      <div className="solution">
        <div class="container">
          <div class="col">
            <div class="row">
              <h1 class="text-center" id="title1">Nos solutions</h1>
            </div>
            <div class="row">
              <h2 class="text-center text-sm-left" id="title2">Découvrir les solutions techniques</h2>
            </div>

          </div>
        </div>
      </div>

      <div className="container" id="boxs">
        <div class="row">
          <div class="col">
            <img className="bgSolution img-thumbnail shadow rounded" src={img1Solution} alt="img1" />
            <div className="box">
              <p>
                <div class="col">
                  <div className='row'>
                    <img src={img2Solution} alt="hodhod" id="chatSize" />
                  </div>
                  <div class="row">

                    <h1 class="text-center" id="hodhodTitle">HODHOD</h1>
                    <div class="row text-center" id="hodhodparagraph" >

                      <p>Une application mobile pour<br></br> la municipalité et les citoyens.</p>
                    </div>
                  </div>
                </div>
              </p>

            </div>

          </div>
          <div className="col">
            <img src={img3Solution} className="img-thumbnail shadow rounded" id="img3Solution" />
            <div className='img3Box'>
            <img src={img2Solution} alt="hodhod" id="chatSize2" />
            <h1 id="hodhodTitle">Senses IA</h1>
            <p id="SensiaP">Solution technologique permettant aux industriels la collection des données.</p>
            </div>
          </div>
        </div>

      </div>
    

      <div id="" >
        <img className='bg-img ' src={backgroundImg} id="expertisets"/>
      </div>
    </div>
  );


}
export default NosValeur;
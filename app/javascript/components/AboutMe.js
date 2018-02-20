import React from 'react';
import test from '../../assets/images/about.jpg';
export default class AboutMe extends React.Component {
  render(){
    return <section id="about">
            <div className="container">
              <div className="info">
                <img src={test} className="img img-responsive"/>
                <article className="aboutMe">
                    <p>
                      Piórkiem i pędzlem, to uśmiech ku kombinacji, którą najbardziej lubię.
                      Już od wielu lat specjalizuję się w rysunku piórkiem (lawowanym) dopełnianym pociągnięciami pędzla, jednak wśród mojej twórczości znajdują się również akwarele oraz akryle.  
                    </p>
                    <p>
                      Tematyką moich prac są przede wszystkim pejzaże polskie.  
                      Niszczejące kościółki, pałace, dworki, stare urokliwe budynki, kryjące w sobie nieraz nie lada historie.  Staram się uchwycić piękno niegdyś tętniących życiem miejsc, które teraz (nierzadko) kryją się w zapomnieniu. Przy każdej okazji podróżniczej staram się zwiedzić jak najwięcej, często zbaczając z głównej trasy, by napotykać na drodze właśnie takie zapomniane perełki. Hołduję powiedzeniu „cudze chwalicie…”, gdyż w moim mniemaniu owe perełki nieraz lepiej wypadają przy osławionych „Europejczykach”.
                    </p>
                    <p>
                    Moja twórczość jest również mocno związana z miejscem zamieszkania. Śląsk, wraz z jego górniczymi pejzażami, dostarczył mi wielu tematów do tworzenia, które również zostały zawarte na mojej stronie. Z mojej strony to wszystko, zapraszam do oglądania.
                  </p>
                </article>
              </div>
            </div>
          </section>
  }
}

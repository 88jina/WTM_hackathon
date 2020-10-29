import React from "react";
import './About.css';

function About() {
    return (
      <section className="about__container">
        <h1 className="about__title">It's time to quit the fast fashion system!</h1>
        <div className="about__content">
          현재 지구의 바다에는 1억 6,500만 톤의 플라스틱 쓰레기가 있는 것으로 알려져 있습니다. <br/>
          지구촌이 이렇게 플라스틱 쓰레기로 몸살을 앓는 가운데, 플라스틱 쓰레기를 재활용한 ‘재생 플라스틱 섬유’를 통해 문제를 해결하고자 하는 기업들이 있습니다.<br/> 
          <span>BLACKGREEN</span>은 이러한 멋진 움직임을 실천하고 있는 기업들을 소개합니다. <br/>
          우리는 이 기업들을 소비자들과 연결하고, 그들이 멋진 움직임을 지속할 수 있도록 응원하고자 합니다.      
        <p>
          재생 플라스틱 섬유란?
          바다에 떠다니는 플라스틱 병과 폐기물을 수거해 깨끗하게 세척하고 파쇄, 정제 과정을 거치면 합성섬유의 원료가 되는 나일론, 폴리에스테르로 만들 수 있습니다.
          플라스틱 원료와 폴리에스테르 원료가 같다는 것을 발견한 셈입니다. 또한 먼저 플라스틱병을 수거해 정제한 후, 정제된 플라스틱 조직을 일반 섬유와 결합시킵니다.
          수트를 만들 때는 플라스틱 조직과 울, 캐시미어를, 스노우 보드 자켓을 만들 때는 재활용된 폴리에스테르만을 사용해 만듭니다.
        </p>
        </div>
      </section>
    ); 
}

export default About;
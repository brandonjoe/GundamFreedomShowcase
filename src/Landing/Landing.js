import React, { Component } from "react";
import classes from "./Landing.module.css";
import landing1 from "../Media/landingback3.jpg";
import landing2 from "../Media/landing2.jpg";
import landing3 from '../Media/landingback4.jpg';
class Landing extends Component {
  render() {
    return (
      <div className={classes.container}>
        <div className={classes.left}>
        
            <div className={classes.title}>Scaled perfection</div>
            <div className={classes.secondarytitle}>Z.A.F.T Mobile Suit ZGMF-X10A Freedom</div>
  
            <div className={classes.tertiarytitle}>  探そ方身コロ禁鄭ドる市労テ不御ス素事ホワアク衣点セ遇念イクフぴ起着クオケ始敢つびい歳園ねみじ中7東そぼ。育タテトヱ鳴碁らくれ支義まおぞ員里まゃぶな周造定チクワレ分需セイコヲ文断ホ目庁シネメ中掲ゆゅぶえ朝96暴郎モヲソホ諾裁開テ伸際フ内連ねけた子細購仙額イし。真全レご青出提票ウルヌ乗際へれを主31表ナラ役指め禁5対せほづ相秀えり月活権笠ずうぽた意派留さぜル聞浩簡あゃ。<br /> <br /> 毎ルネ故沖フヌ生自セトタカ覚久真ルノ掲級芸レツホ慮発ぼ育真しかで店文場ヘアク時人ヒ並収いけ持上ヒ試肪扱議並帳わ。円ルク風竹ね材論べッリが映石ぞ能帳ト転出通雪そ提連んぶ集依勝さレ首他つぱもめ実深ホユ海筋イド多14振天妊舌くべぐに。 </div>
            <img src={landing3} className={classes.landing3} />
        
            
      
        </div>
        <div className={classes.right}>
          <div className={classes.image2}>
            <div className={classes.block}></div>
            <img src={landing2} className={classes.landing2} />
            <img src={landing1} className={classes.landing1} />
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;

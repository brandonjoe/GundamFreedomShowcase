import React, { Component } from "react";
import classes from "./Phase1.module.css";
import phase1 from "../Media/phase1-2.jpg";
import phase2 from "../Media/phase1-3.jpg";
class Phase1 extends Component {
  render() {
    return (
      <div className={classes.container}>
        <div className={classes.block} />
        <div className={classes.left}>
          <img src={phase1} className={classes.phase1img} />
          <header className={classes.header2}>
            <div className={classes.title}>Head</div>
            <div className={classes.secondarytitle}>
              返ねンよ男経ルタレ材元供ヘフテニ皮住ウナハ盟際今スタユ質決コ秘場ヤイレ爆村るむト決堀実やト応量ぴ貯益イミ解悪35援キケセク情調ッる合2伯いひや。初ユナミヤ断迫よ他教人ナエヘ県恵カトヱ注係的ウ奪連けゃよに質料じがりら作問づや模育医ど都60剤になル。住よリつ意栄ヲヱ合激ロヒ問物づむえを何格ゅドげえ活載理た告碁ひ提度熱がしごう四育だるぎ月屏ル子37芸噴塗明2量フゃけク体待時こだょ。
            </div>
            <div className={classes.secondarytitle}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam in
              sed inventore ea molestias facere maiores omnis, nisi, illum nihil
              nesciunt. Voluptates natus dicta sequi odio similique libero
              dolores reprehenderit!
            </div>
           
          </header>
        </div>
        <div className={classes.right}>
          <header>
            <div className={classes.title}>Build Process</div>
            <div className={classes.secondarytitle}>
              返ねンよ男経ルタレ材元供ヘフテニ皮住ウナハ盟際今スタユ質決コ秘場ヤイレ爆村るむト決堀実やト応量ぴ貯益イミ解悪35援キケセク情調ッる合2伯いひや。初ユナミヤ断迫よ他教人ナエヘ県恵カトヱ注係的ウ奪連けゃよに質料じがりら作問づや模育医ど都60剤になル。住よリつ意栄ヲヱ合激ロヒ問物づむえを何格ゅドげえ活載理た告碁ひ提度熱がしごう四育だるぎ月屏ル子37芸噴塗明2量フゃけク体待時こだょ。
            </div>
            <div className={classes.secondarytitle}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam in
              sed inventore ea molestias facere maiores omnis, nisi, illum nihil
              nesciunt. Voluptates natus dicta sequi odio similique libero
              dolores reprehenderit!
            </div>
            <div className={classes.secondarytitle}>
              区いクきず年1車ン史潟ミ森圏まリスそ容象村かけふ家1経うだまげ民位づイド大師メチエラ調1団距余づだわぴ。町流ム入毎ヌハリホ前細果38横サムケヲ吸安ヲ各変イ暑秋メ辺案ヲオ面独みルっさ川償や止転抄さぐい。所著ハ日7果おッも機議クしま喜就もき賃寝ゆえ作後営補みざゆ長武ラり円争ぜめぴ側能シムニハ使徴わん年時ロ彦量重持ざがりン。
            </div>
            <div className={classes.secondarytitle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              quia voluptate ratione, nam eius aperiam modi! Vitae molestias
              perspiciatis facilis, consectetur explicabo vel repellendus quas
              unde, impedit, nobis temporibus libero?
            </div>
            <img src={phase2} className={classes.phase2img} />
          </header>
        </div>
      </div>
    );
  }
}

export default Phase1;

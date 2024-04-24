import React from "react";
import "./Sidebar.css";
import home_icon from "../../assets/home.png";
import game_icon from "../../assets/game.png";
import automobile_icon from "../../assets/automobile.png";
import sport_icon from "../../assets/sport.png";
import entertainment_icon from "../../assets/entertainment.png";
import technology_icon from "../../assets/technology.png";
import music_icon from "../../assets/music.png";
import blogs_icon from "../../assets/blogs.png";
import news_icon from "../../assets/news.png";
import venu from "../../assets/venu.png";
import vinay from "../../assets/vinay.png";
import harish from "../../assets/harish.png";

const Sidebar = ({ sidebar, category, setCategory }) => {
  return (
    <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
      <div className="shortcut-links">
        <div className={`side-link ${category===0?'active':''}`} onClick={()=>setCategory(0)}>
          <img src={home_icon} alt="" />
          <p>Home</p>
        </div>
        <div className={`side-link ${category===20?'active':''}`} onClick={()=>setCategory(20)}>
          <img src={game_icon} alt="" />
          <p>Gaming</p>
        </div>
        <div className={`side-link ${category===2?'active':''}`} onClick={()=>setCategory(2)}>
          <img src={automobile_icon} alt="" />
          <p>Automobiles</p>
        </div>
        <div className={`side-link ${category===17?'active':''}`} onClick={()=>setCategory(17)}>
          <img src={sport_icon} alt="" />
          <p>Sports</p>
        </div>
        <div className={`side-link ${category===24?'active':''}`} onClick={()=>setCategory(24)}>
          <img src={entertainment_icon} alt="" />
          <p>Entertainment</p>
        </div>
        <div className={`side-link ${category===28?'active':''}`} onClick={()=>setCategory(28)}>
          <img src={technology_icon} alt="" />
          <p>Technology</p>
        </div>
        <div className={`side-link ${category===10?'active':''}`} onClick={()=>setCategory(10)}>
          <img src={music_icon} alt="" />
          <p>Musics</p>
        </div>
        <div className={`side-link ${category===22?'active':''}`} onClick={()=>setCategory(22)}>
          <img src={blogs_icon} alt="" />
          <p>Blogs</p>
        </div>
        <div className={`side-link ${category===25?'active':''}`} onClick={()=>setCategory(25)}>
          <img src={news_icon} alt="" />
          <p>News</p>
        </div>
        <hr />
      </div>
      <div className="subscribers-list">
        <h3>Subscribed</h3>
        <div className="side-link">
          <img src={venu} alt="" />
          <p>Venu</p>
        </div>
        <div className="side-link">
          <img src={vinay} alt="" />
          <p>Vinay</p>
        </div>
        <div className="side-link">
          <img src={harish} alt="" />
          <p>Harish</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

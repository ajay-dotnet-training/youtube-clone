import React, { useEffect, useState } from "react";
import "./PlayVideo.css";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import { API_KEY, valueConverter } from "../../data";
import moment from "moment";
import { useParams } from "react-router-dom";

const PlayVideo = () => {
  const {videoId} = useParams();
  const [apiData, setApiData] = useState(null);
  const [channelData, setChannelData] = useState(null);
  const [commentData, setCommentData] = useState(null);

  const fetchVideoData = async () => {
    // fetching videos Data
    const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
    await fetch(videoDetails_url)
      .then((response) => response.json())
      .then((data) => setApiData(data.items[0]));
  };

  const fetchOtherData = async () => {
    // fetching channel data
    const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
    await fetch(channelData_url)
      .then((response) => response.json())
      .then((data) => setChannelData(data.items[0]));

    //fetching comment data
    const commnet_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2C%20replies&maxResults=50&videoId=${videoId}&key=${API_KEY}`;
    await fetch(commnet_url)
      .then((response) => response.json())
      .then((data) => setCommentData(data.items));
  };
  useEffect(() => {
    fetchVideoData();
  }, [videoId]);

  useEffect(() => {
    fetchOtherData();
  }, [apiData]);
  return (
    <div className="play-video">
      {/* <video src={sita_ramam} controls autoPlay muted></video> */}
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <h3>{apiData ? apiData.snippet.title : "title here"}</h3>
      <div className="play-video-info">
        <p>
          {apiData
            ? valueConverter(apiData.statistics.viewCount)
            : "view count"}
          &bull; {apiData ? moment(apiData.snippet.publishedAt).fromNow() : ""}
        </p>
        <div>
          <span>
            <img src={like} alt="" />
            {apiData ? valueConverter(apiData.statistics.likeCount) : ""}
          </span>
          <span>
            <img src={dislike} alt="" />
          </span>
          <span>
            <img src={share} alt="" />
            Share
          </span>
          <span>
            <img src={save} alt="" />
            Save
          </span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img
          src={channelData ? channelData.snippet.thumbnails.default.url : ""} alt=""/>
        <div>
          <p>{apiData ? apiData.snippet.channelTitle : "Channel title"}</p>
          <span>
            {channelData?valueConverter(channelData.statistics.subscriberCount): ""}
            Subscribers
          </span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="video-description">
        <p>
          {apiData ? apiData.snippet.description.slice(0, 300) : "description"}
        </p>
        <hr />
        <h4>
          {apiData? valueConverter(apiData.statistics.commentCount):"Commnet Count"} comments
        </h4>
        { commentData && commentData.map((item, index) => {
          return (
            <div key={index} className="comments">
              <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt=""/>
              <div>
                <h3>
                  {item.snippet.topLevelComment.snippet.authorDisplayName}
                  <span>1 day ago</span>
                </h3>
                <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                <div className="comment-action">
                  <img src={like} alt="" />
                  <span>{valueConverter(item.snippet.topLevelComment.snippet.likeCount)}
                  </span>
                  <img src={dislike} alt="" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PlayVideo;

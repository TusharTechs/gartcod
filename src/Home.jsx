import React, { useEffect, useState } from "react";
import "./App.css";

const Home = () => {
  const [currentImage, setCurrentImage] = useState("chrome");
  const [countdown, setCountdown] = useState({
    days: 20,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const textColor = {
    chrome: "#FFD700",
    phone: "pink",
    tablet: "#FFF",
  };

  const gamingColor = {
    chrome: "#FFD700",
    phone: "pink",
    tablet: "#FFF",
  };

  const buttonBackgroundColor = {
    chrome: "#FFD700",
    phone: "pink",
    tablet: "#FFF",
  };

  useEffect(() => {
    const imageLoop = setInterval(() => {
      switch (currentImage) {
        case "chrome":
          setCurrentImage("phone");
          break;
        case "phone":
          setCurrentImage("tablet");
          break;
        case "tablet":
          setCurrentImage("chrome");
          break;
        default:
          break;
      }
    }, 2000);

    return () => clearInterval(imageLoop);
  }, [currentImage]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prevCountdown) => {
        const { days, hours, minutes, seconds } = prevCountdown;

        let newSeconds = seconds - 1;
        let newMinutes = minutes;
        let newHours = hours;
        let newDays = days;

        if (newSeconds < 0) {
          newSeconds = 59;
          newMinutes -= 1;
        }

        if (newMinutes < 0) {
          newMinutes = 59;
          newHours -= 1;
        }

        if (newHours < 0) {
          newHours = 23;
          newDays -= 1;
        }

        return {
          days: newDays,
          hours: newHours,
          minutes: newMinutes,
          seconds: newSeconds,
        };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="gartcod-container">
      <div className="gartcod-content">
        <div className="gartcod-header">
          <img
            className="gartcod-image"
            src="/gartcod-without-bg.webp"
            alt=""
          />
          <span className="gartcod-text">for</span>
          {currentImage === "chrome" && (
            <>
              <img
                className="chrome"
                width={100}
                height={100}
                src="/chrome.db58996d.svg"
                alt=""
              />
              <div className="yellow-background"></div>
              <span
                style={{
                  color: "#FFD700",
                  fontSize: "4.5rem",
                  fontWeight: "bold",
                }}
              >
                & Cloud
              </span>
            </>
          )}
          {currentImage === "phone" && (
            <>
              <svg
                className="phone"
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                viewBox="0 0 14 20"
                fill="none"
              >
                <g clip-path="url(#clip0_266_122)">
                  <path
                    d="M1 3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1H11C11.5304 1 12.0391 1.21071 12.4142 1.58579C12.7893 1.96086 13 2.46957 13 3V17C13 17.5304 12.7893 18.0391 12.4142 18.4142C12.0391 18.7893 11.5304 19 11 19H3C2.46957 19 1.96086 18.7893 1.58579 18.4142C1.21071 18.0391 1 17.5304 1 17V3Z"
                    stroke="url(#paint0_linear_266_122)"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6 2H8"
                    stroke="#FCA5A5"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7 15V15.01"
                    stroke="#FCA5A5"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_266_122"
                    x1="7"
                    y1="1"
                    x2="7"
                    y2="19"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FCA5A5" />
                    <stop offset="0.9999" stop-color="#FCA5A5" />
                  </linearGradient>
                  <clipPath id="clip0_266_122">
                    <rect width="14" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <div className="pink-background"></div>
              <div>
                <span
                  style={{
                    color: "pink",
                    fontSize: "4.5rem",
                    fontWeight: "bold",
                  }}
                >
                  & Cloud
                </span>
              </div>
            </>
          )}
          {currentImage === "tablet" && (
            <>
              <svg
                className="tablet"
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                viewBox="0 0 20 16"
                fill="none"
              >
                <g clip-path="url(#clip0_266_127)">
                  <path
                    d="M1 3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1H17C17.5304 1 18.0391 1.21071 18.4142 1.58579C18.7893 1.96086 19 2.46957 19 3V13C19 13.5304 18.7893 14.0391 18.4142 14.4142C18.0391 14.7893 17.5304 15 17 15H3C2.46957 15 1.96086 14.7893 1.58579 14.4142C1.21071 14.0391 1 13.5304 1 13V3Z"
                    stroke="#A3A3A3"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4 4H4.01"
                    stroke="#FE5F58"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7 4H7.01"
                    stroke="#FEBC2E"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10 4H10.01"
                    stroke="#28C841"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_266_127">
                    <rect width="20" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <div className="white-background"></div>
              <span
                style={{
                  color: "#FFF",
                  fontSize: "4.5rem",
                  fontWeight: "bold",
                }}
              >
                & Cloud
              </span>
            </>
          )}
        </div>
        <span
          style={{
            color: gamingColor[currentImage],
            fontSize: "4.5rem",
            fontWeight: "bold",
          }}
        >
          gaming
        </span>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "3rem",
          }}
        >
          <span style={{ color: "#d1d5db", fontSize: "14px" }}>
            Join us on the launch of gartcod by{" "}
          </span>
          <img width={50} height={50} src="/provoke_logo.webp" alt="" />
        </div>
        <div>
          <button
            style={{
              backgroundColor: buttonBackgroundColor[currentImage],
              padding: "10px 20px",
              borderRadius: "8px",
              border: "none",
              margin: "2rem",
            }}
          >
            Claim ticket
          </button>
        </div>
        <div
          className="timeclock"
          style={{
            color: "#FFF",
            fontSize: "2rem",
            display: "flex",
            justifyContent: "center",
            gap: "30px",
          }}
        >
          <div>
            {countdown.days}
            <div
              style={{
                fontSize: "8px",
                fontWeight: "bold",
                color: textColor[currentImage],
              }}
            >
              DAYS
            </div>
          </div>
          <div>
            {countdown.hours}
            <div
              style={{
                fontSize: "8px",
                fontWeight: "bold",
                color: textColor[currentImage],
              }}
            >
              HOURS
            </div>
          </div>
          <div>
            {countdown.minutes}
            <div
              style={{
                fontSize: "8px",
                fontWeight: "bold",
                color: textColor[currentImage],
              }}
            >
              MINUTES
            </div>
          </div>
          <div>
            {countdown.seconds}
            <div
              style={{
                fontSize: "8px",
                fontWeight: "bold",
                color: textColor[currentImage],
              }}
            >
              SECONDS
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

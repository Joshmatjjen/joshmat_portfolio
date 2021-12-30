import React, { useEffect, useState } from "react";
import "./Testimony.scss";
import "react-toastify/dist/ReactToastify.css";
import ItemsCarousel from "react-items-carousel";
import "react-multi-carousel/lib/styles.css";
import "@brainhubeu/react-carousel/lib/style.css";

const Testimony = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  console.log(window.innerWidth);
  const [cardNum, setCardNum] = useState();
  useEffect(() => {
    if (window.innerWidth <= 1010) {
      setCardNum(1);
    } else {
      setCardNum(2);
    }
  }, []);
  const testimonies = [
    {
      comment:
        "The moment i knew him, my life changed. I am so grateful to God for having someone like him",
      name: "Grant N",
      title: "CEO at Index Ventures",
      image:
        "https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png",
    },
    {
      comment:
        "Working with Joshua has made me see things in different perspective, which has being really helpful in my life",
      name: "Joshmat JJen",
      title: "CTO at Cre8tiveTech",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRRHxKxqm6UUG1QmyuvO1xLunxSUyV-gxr-g&usqp=CAU",
    },
    {
      comment:
        "I knew him as someone who never give up, he keeps pushing till his dream comes to reality",
      name: "Lizzy V",
      title: "COO at Abex Clothing",
      image:
        "https://cdn1.iconfinder.com/data/icons/avatar-2-2/512/Doctor_Lady-512.png",
    },
    {
      comment:
        "He is a young man with lot of creative mind. The younger ones in the society need to learn from him",
      name: "Grace B",
      title: "CEO at Pinky Hairs",
      image:
        "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_female_woman_avatar-512.png",
    },
  ];
  return (
    <div className="section">
      <div className="testimony" style={{ height: window.innerHeight }}>
        {/* Title & Sub */}
        <section className="testimony__top">
          <h1>Testimonials</h1>
          <p>What people have to say about me</p>
        </section>
        <section className="testimony__content">
          {/* Edu Section */}
          <div
            style={{
              padding: "0 60px",
              maxWidth: window.innerWidth <= 1010 ? 600 : 800,
              margin: "0 auto",
              position: "relative",
            }}
          >
            <ItemsCarousel
              infiniteLoop={false}
              gutter={window.innerWidth <= 1010 ? 69 : 19}
              activePosition={"center"}
              chevronWidth={60}
              disableSwipe={false}
              alwaysShowChevrons={false}
              numberOfCards={cardNum}
              slidesToScroll={window.innerWidth <= 1010 ? 1 : 2}
              outsideChevron={true}
              showSlither={true}
              firstAndLastGutter={true}
              activeItemIndex={activeItemIndex}
              requestToChangeActive={(value) => setActiveItemIndex(value)}
              leftChevron={<div className="li-chevron">{"<"}</div>}
              rightChevron={<div className="li-chevron">{">"}</div>}
            >
              {/* {Array.from(new Array(10)).map((_, i) => (
                
              ))} */}
              {testimonies.map((item, i) => (
                <div className="testimony__content--box" key={i}>
                  <h4>❜❜</h4>
                  <p>{item.comment}</p>
                  <div className="testimony__content--box__user">
                    <img src={item.image} alt="" />
                    <div>
                      <h3>{item.name}</h3>
                      <p>{item.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </ItemsCarousel>
          </div>
          <div className="testimony__content--scroll">
            <i className="fad fa-long-arrow-alt-left" />
            <p>Swipe</p>
            <i className="fad fa-long-arrow-alt-right" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Testimony;

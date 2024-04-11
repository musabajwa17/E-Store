/* eslint-disable react/prop-types */
// import choose1 from "../assets/images/Group 181.png";
const Choose_us_Card = ({img, heading, para}) => {
  return (
     <div className="choose_us_item">
              <div className="choose_img">
                <img src={img} />
              </div>
              <div className="choose_text_container">
                <div className="item_title">
                  <h3>{heading}</h3>
                </div>
                <div className="item_discription">
                  <p>
                    {para}
                  </p>
                </div>
              </div>
            </div>
  )
}

export default Choose_us_Card

/* eslint-disable react/prop-types */

const FeaturesCard = ({img, head, para}) => {
  return (
    <div className="feature_item_container">
              <div className="feature_img">
                <img src={img} alt="" />
              </div>
              <div className="feature_text">
                <h3>{head}</h3>
                <p>{para}</p>
              </div>
            </div>
  )
}

export default FeaturesCard

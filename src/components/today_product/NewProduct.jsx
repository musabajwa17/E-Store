/* eslint-disable react/prop-types */
const NewProduct = ({img, head, para}) => {
  return (
    <div className="today_product_item">
                                <div className="product_img"><img src={img} /></div>
                                <div className="text_container">
                                <div className="product_text">
                                    <h3>{head}</h3>
                                    <h3>{para}</h3>
                                </div>
                                </div>
                            </div>
  )
}

export default NewProduct

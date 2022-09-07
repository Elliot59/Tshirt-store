import React from "react";

const ImageHelper = ({product}) => {
    const imageUrl = product ? product.image
        : 'https://blog.rahulbhutani.com/wp-content/uploads/2020/05/Screenshot-2018-12-16-at-21.06.29.png'
    return (
        <div className="rounded border border-success p-2">
            <img
                src={imageUrl}
                style={{maxHeight: "100%", maxWidth: "100%"}}
                className="mb-3 rounded"
                alt="not found"
            />
        </div>
    )


}
export default ImageHelper
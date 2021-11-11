import './ListProduct.css'

export const ListProduct = () => {
    return <div className="ant-list-items">
        <div className="ant-list-item">
            <div className="ant-list-item-meta">
                <div className="ant-list-item-meta-avatar">
                    <span className="ant-image-img">
                        <img src="https://picsum.photos/300/300" style={{width: 100}}/>
                    </span>
                </div>
                <div className="ant-list-item-meta-content">
                    <h4 className="ant-list-item-meta-title">
                        <a>Product Name</a>
                    </h4>
                    <div className="ant-list-item-meta-description">
                        Product Description
                    </div>
                </div>
                <ul className="ant-list-item-action">
                    <li>
                        <a>Edit</a>
                    </li>
                    <li>
                        <a>Remove</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
}
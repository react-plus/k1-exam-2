import React from "react";

export const AddProductForm = () => {
    return <div>
        <div className="field-input-group">
            <input placeholder="Image" type="text" className="ant-input" />
        </div>
        <div className="field-input-group">
            <input placeholder="Product name" type="text" className="ant-input" />
        </div>
        <div className="field-input-group">
            <input placeholder="Product description" type="text" className="ant-input" />
        </div>
        <div className="modal-new-user-footer">
            <button className="ant-btn ant-btn-primary">
                Save
            </button>
            <button className="ant-btn" style={{marginLeft: 10}} >
                Cancel
            </button>
        </div>
    </div>
}

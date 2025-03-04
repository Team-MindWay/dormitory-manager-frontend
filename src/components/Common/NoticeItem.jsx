import React, { useState } from "react";
import { marked } from "marked";
import "../../styles/NoticeItem.css";

const NoticeItem = ({ title, content }) => {
    const maxLength = 150;
    const [isExpanded, setIsExpanded] = useState(false);


    marked.setOptions({
        gfm: true,
        breaks: true,
    });

    return (
        <div className="notice-item" onClick={() => setIsExpanded(!isExpanded)}>
            <div className="notice-content">
                <div className="notice-title">{title}</div>
                <div
                    className="notice-text"
                    dangerouslySetInnerHTML={{
                        __html: isExpanded
                            ? marked(content)
                            : marked(content.length > maxLength ? content.slice(0, maxLength) + "..." : content),
                    }}
                />
            </div>
        </div>
    );
};

export default NoticeItem;

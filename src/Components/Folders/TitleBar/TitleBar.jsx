import React from 'react'

const TitleBar = ({title,onToggle}) => {
  return (
    <div className="windows-titlebar">
        <div className="windows-title">{title}</div>
        <div className="windows-buttons">
          <div
            class="windows-button"
            style={{ backgroundColor: "#BABABA" }}
          ></div>
          <div
            class="windows-button"
            style={{ backgroundColor: "red" }}
            onClick={onToggle}
          >
            X
          </div>
        </div>
    </div>
  )
}

export default TitleBar
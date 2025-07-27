import React, { useState } from "react";
import data from "../../data.json";
import { ToggleSwitch } from "./ToggleSwitch";

export const Extensions = () => {
  const [extensions, setExtensions] = useState(data);
  const [filter, setFilter] = useState("all");

  const filteredExtensions = extensions.filter(ext => {
    if (filter === "all") return true;
    if (filter === "active") return ext.active;
    if (filter === "inactive") return !ext.active;
    return true;
  })

  const handleRemove = (name) => {
    setExtensions(prev => prev.filter(ext => ext.name !== name));
  }

  const handleToggleActive = (name) => {
    setExtensions(prev =>
      prev.map(ext => ext.name === name ? { ...ext, active: !ext.active } : ext)
    );
  }

  return (
    <div>
      <div className="extensions">
        <p>Extensions list</p>
        <div className="filter-buttons">
          <button
            className={filter === "all" ? "active-filter" : ""}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button
            className={filter === "active" ? "active-filter" : ""}
            onClick={() => setFilter("active")}
          >
            Active
          </button>
          <button
            className={filter === "inactive" ? "active-filter" : ""}
            onClick={() => setFilter("inactive")}
          >
            Inactive
          </button>
        </div>
      </div>
      <div className="container">
        {filteredExtensions.length === 0 ? (
          <div style={{ width: "100%", textAlign: "center", marginTop: "2rem", color: "#888" }}>
            {filter === "active" && "There are no active extensions."}
            {filter === "inactive" && "There are no inactive extensions."}
            {filter === "all" && "There are no extensions."}
          </div>
        ) : (
          filteredExtensions.map((ext) => (
            <div className="item" key={ext.name}>
              <div className="item-content">
                <img src={ext.logo} alt={ext.name} />
                <div>
                  <h4>{ext.name}</h4>
                  <p>{ext.description}</p>
                </div>
              </div>
              <div>
                <button onClick={() => handleRemove(ext.name)}>Remove</button>
                <ToggleSwitch
                  checked={ext.active}
                  onChange={() => handleToggleActive(ext.name)}
                />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

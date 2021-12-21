import React, { useState, useEffect } from "react";
import { getList } from "./list";

function App() {
  // getfromAPI
  const [list, setList] = useState([]);
  // setPlaceholder and handleChange
  const [value, setValue] = useState("default");
  // Store to item array
  const [item, setItems] = useState([]);
  // handleChange with pv code
  const [province, setProvinces] = useState({
    province_code: "",
    province_name_th: "",
  });

  useEffect(() => {
    let mounted = true;
    getList().then((items) => {
      if (mounted) {
        setList(items);
      }
    });
    return () => (mounted = false);
  }, []);

  function handleChange(event) {
    // setValue(event.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // setItems((previousItems) => {
    //   return [...previousItems, item];
    // });
  }

  return (
    <div>
      <h1 className="title">We are ready to deliver to you all the time</h1>

      {/* Button */}
      <button
        className="click-button btn btn-outline-dark"
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Click Me
      </button>
      {/* Modal Pop-up */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body margin-mBody">
              <form onSubmit={handleSubmit}>
                <label htmlFor="province-dropdown">เลือกจังหวัด</label>
                <select
                  defaultValue={value}
                  onChange={handleChange}
                  className="form-select"
                  id="province-dropdown"
                >
                  <option value="default" disabled hidden>
                    กรุณาเลือกจังหวัด
                  </option>
                  {list.map((item) => (
                    <option
                      key={item.province_name_th}
                      value={item.province_name_th}
                    >
                      {item.province_name_th}
                    </option>
                  ))}
                </select>

                <div className="container confirm-btn">
                  <div className="row">
                    <div className="col text-center">
                      <button className="btn btn-dark">ตกลง</button>
                    </div>
                  </div>
                </div>

                <textarea rows="5"></textarea>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

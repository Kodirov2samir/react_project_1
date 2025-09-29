import "./Content.css";
import { CiCircleChevLeft } from "react-icons/ci";
import { CiCircleChevRight } from "react-icons/ci";
import { IoSearch } from "react-icons/io5";
import { CiBellOn } from "react-icons/ci";
import { useState } from "react";
import { FiTrash } from "react-icons/fi";
import { GoPencil } from "react-icons/go";
import axios from "axios";
import { useEffect } from "react";
function Content({ isOpen, setIsOpen }) {
  const [name, addname] = useState("");
  const [email, addemail] = useState("");
  const [phone, addphone] = useState("");
  const [enroll, addenroll] = useState("");
  const [date, adddate] = useState("");
  const [img, addimage] = useState("");
  const [ovr, ovrArr] = useState([]);
  const [change,changefunc] = useState(true)
  const [editingItem, setEditingItem] = useState(null);
  useEffect(() => {
    axios.get("http://localhost:3001/workers").then((res) => ovrArr(res.data));
  }, []);

   function makeFalse() {
    changefunc(false)
   }
   function makeTrue() {
    changefunc(true)
   }
  const postToBack = () => {
    axios
      .post("http://localhost:3001/workers", {
        name,
        email,
        phone,
        enroll,
        date,
        img,
      })
      .then((res) => ovrArr([...ovr, res.data]));
  };
  const deleteFromBack = (id) => {
    axios
      .delete(`http://localhost:3001/workers/${id}`)
      .then(() => ovrArr(ovr.filter((item) => item.id !== id)));
  };

  const editInBack = (item) => {
    setEditingItem(item);
    addphone(item.phone);
    addemail(item.email);
    addname(item.name);
    addenroll(item.enroll);
    addimage(item.img);
    adddate(item.date);
    makeFalse()
  };
  const updateData = () => {
    axios
      .put(`http://localhost:3001/workers/${editingItem.id}`, {
        name,
        email,
        enroll,
        date,
        img,
        phone,
      })
      .then((res) =>
        ovrArr(
          ovr.map((item) => (item.id == editingItem.id ? res.data : item))
        )
      );
      setEditingItem(null)
      makeTrue()
  };
  return (
    <main className="site-main">
      <header className="site-header">
        <div className="close-open-menu">
          <span
            className={isOpen ? "icon-wrap" : "invisible"}
            onClick={() => setIsOpen(false)}
          >
            <CiCircleChevLeft />
          </span>
          <span
            className={isOpen ? "invisible" : "icon-wrap"}
            onClick={() => setIsOpen(true)}
          >
            <CiCircleChevRight />
          </span>
        </div>
        <div className="search-main-wrap">
          <div className="search-wrap">
            <input
              onChange={(e) =>
                ovrArr(ovr.filter((item) => item.name.includes(e.target.value)))
              }
              type="text"
              placeholder="Search"
            />
            <span>
              <IoSearch />
            </span>
          </div>
          <span className="bell-icon">
            <CiBellOn />
          </span>
        </div>
      </header>
      <section className="hero">
        <div className="hero-head">
          <h2>Student-List</h2>
          <form className="inp-wrap">
            <input
              onChange={(e) => addimage(e.target.value)}
              type="url"
              placeholder="image-link"
              value={img}
            />
            <input
              onChange={(e) => addname(e.target.value)}
              type="text"
              placeholder="name"
              value={name}
            />
            <input
              onChange={(e) => addemail(e.target.value)}
              type="email"
              placeholder="email"
              value={email}
            />
            <input
              onChange={(e) => addphone(e.target.value)}
              type="number"
              placeholder="Phone number"
              value={phone}
            />
            <input
              onChange={(e) => addenroll(e.target.value)}
              type="number"
              placeholder="enroll number"
              value={enroll}
            />
            <input
              onChange={(e) => adddate(e.target.value)}
              type="date"
              placeholder="date-ofadmission"
              value={date}
            />
            <button onClick={postToBack} className="btn">
              Submit
            </button>
          </form>
        </div>
        <hr className="line" />
        <table>
          <thead>
            <tr>
              <th className="img-w"></th>
              <th className="names">name</th>
              <th>email</th>
              <th>phone</th>
              <th>enroll</th>
              <th>date</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody className="user-info-wrap">
            {ovr.map((item, index) => {
              return (
                <tr className='row-main' key={index}>
                  <td>
                    <img
                      className="user-image"
                      src={item.img}
                      alt="image of yours"
                    />
                  </td>
                  <td className="user-name">{item.name}</td>
                  <td className="user-email">{item.email}</td>
                  <td className="user-phone">{item.phone}</td>
                  <td className="user-enroll">{item.enroll}</td>
                  <td className="user-date">{item.date}</td>
                  <td>
                    <span  onClick={() => editInBack(item)} className="pencil">
                      <GoPencil />
                    </span>
                    <span className={change ?'empty':'disappear'} onClick={() => deleteFromBack(item.id)}>
                      <FiTrash />
                    </span>
                    <span className={change ?'disappear' :'update-btn'} onClick={updateData}>update</span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </main>
  );
}

export default Content;

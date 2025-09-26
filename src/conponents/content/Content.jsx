import "./Content.css";
import { CiCircleChevLeft } from "react-icons/ci";
import { CiCircleChevRight } from "react-icons/ci";
import { IoSearch } from "react-icons/io5";
import { CiBellOn } from "react-icons/ci";
import { useState } from 'react';
function Content({ isOpen, setIsOpen }) {
  const [name,addname] = useState("")
  const [email,addemail] = useState("")
  const [phone,addphone] = useState("")
  const [enroll,addenroll] = useState("")
  const [date,adddate] = useState("")
  const [img,addimage] = useState("")
  const [ovr,ovrArr]=useState([])
  function handleSubmit(e) {
    e.preventDefault()
    let obj = {
      name,
      email,
      phone,
      enroll,
      date,
      img
    }
    ovrArr([...ovr,obj])
  console.log(ovr);
  
  }
  
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
            <input type="text" placeholder="Search" />
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
           <form onSubmit={handleSubmit} className='inp-wrap'>
             <input onChange={(e) => addimage(e.target.value)} type="url" placeholder='image-link'/>
            <input onChange={(e) => addname(e.target.value)} type="text" placeholder='name'/>
            <input onChange={(e) => addemail(e.target.value)} type="email" placeholder='email'/>
            <input onChange={(e) => addphone(e.target.value)} type="number" placeholder='Phone number'/>
            <input onChange={(e) => addenroll(e.target.value)} type="number" placeholder='enroll number'/>
            <input onChange={(e) => adddate(e.target.value)} type="date" placeholder='date-ofadmission'/>
            <button className='btn'>Submit</button>
           </form>
        </div>
        <thead>
          <th className='names'>name</th>
          <th>email</th>
          <th>phone</th>
          <th>enroll</th>
          <th>date</th>
        </thead>
        <div className='hero-added'>  
          {ovr.map((item,index)=>{
            return(
              <tbody className='user-info-wrap' key={index}>
                <img className='user-image' src={item.img} alt="image of yours" />
                <td className='user-name'>{item.name}</td>
                <p className='user-email'>{item.email}</p>
                <p className='user-phone'>{item.phone}</p>
                <p className='user-enroll'>{item.enroll}</p>
                <p className='user-date'>{item.date}</p>
              </tbody>
            )
          })}   
        </div>
      </section>
    </main>
  );
}

export default Content;

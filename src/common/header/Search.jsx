import React from "react"
import logo from "../../components/assets/images/logo.svg"
import { Link, useHistory } from "react-router-dom"

const Search = ({ CartItem }) => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search")
    search.classList.toggle("active", window.scrollY > 100)
  })

  const navigate = useHistory();
  const logOut = () => {
    navigate.push("/");
    window.location.reload();
     
  }


  return (
    <>
      <section className='search'>
        <div className='container c_flex'>
          <div className='logo width '>
            {/* <img src={logo} alt='' /> */}
            <h1 className='title-text'>Food World</h1>
          </div>

          {/* <div className='search-box f_flex'>
            <i className='fa fa-search'></i>
            <input type='text' placeholder='Search and hit enter...' />
            <span>All Category</span>
          </div> */}

          <div className='icon f_flex width'>
            <div onClick={logOut}>
            <i className='fa fa-user icon-circle' title='LogOut'></i>
            </div>
            <div className='cart'>
              <Link to='/cart'>
                <i className='fa fa-shopping-bag icon-circle' title='Cart'></i>
                <span>{CartItem.length === 0 ? "0" : CartItem.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Search

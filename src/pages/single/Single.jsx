import Chart from '../../components/chart/Chart'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import List from '../../components/table/List'
import './single.scss'

function Single() {
  return (
    <div className='single'>
      <Sidebar/>
      <div className="singleContainer">
        <Navbar/>
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img src="http://scrubbing.in/wp-content/uploads/2018/08/pexels-photo-875862.png"
               alt=""
                className="itemImg" />
                <div className="details">
                  <h1 className="itemTitle">Jane Doe</h1>
                  <div className="detailItem">
                    <span className="itemKey">
                      Email:
                    </span>
                    <span className="itemValue">
                      janedoe@gmail.com
                    </span>
                  </div>

                  <div className="detailItem">
                    <span className="itemKey">
                      Phone:
                    </span>
                    <span className="itemValue">
                      +95 263 399 219
                    </span>
                  </div>

                  <div className="detailItem">
                    <span className="itemKey">
                      Address:
                    </span>
                    <span className="itemValue">
                    3234 Swick Hill Street
                    </span>
                  </div>

                  <div className="detailItem">
                    <span className="itemKey">
                      Country:
                    </span>
                    <span className="itemValue">
                      Myanmar
                    </span>
                  </div>

                  
                </div>
            </div>
            
          </div>
          <div className="right">
           <Chart aspect={ 3 / 1} title="User spending last 6 month"/>
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Last Transaction</h1>
          <List/>
        </div>
      </div>
    </div>
  )
}

export default Single
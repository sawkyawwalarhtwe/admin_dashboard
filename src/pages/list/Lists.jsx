import Datatable from "../../components/datatable/Datatable"
import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import "./lists.scss"

function Lists() {
  return (
    <div className="lists">
      <Sidebar/>
      <div className="listContainer">
      <Navbar/>
      <Datatable/>
      </div>
    </div>
  )
}

export default Lists
import './table.scss'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function List() {
  const rows=[
    {
      id:1235321,
      product: "Acer",
      image:"https://static.acer.com/up/Resource/Acer/Laptops/Aspire_3/rev-jan-2021/20210311/main_640.jpg",
      customers:"John Doe",
      amount:789,
      date:'7/6/2022',
      method:"Cash on delivery",
      status:"Approved"
    },
    {
      id:1235321,
      product: "Acer",
      image:"https://static.acer.com/up/Resource/Acer/Laptops/Aspire_3/rev-jan-2021/20210311/main_640.jpg",
      customers:"John Doe",
      amount:789,
      date:'7/6/2022',
      method:"Cash on delivery",
      status:"Pending"
    },
    {
      id:1235321,
      product: "Acer",
      image:"https://static.acer.com/up/Resource/Acer/Laptops/Aspire_3/rev-jan-2021/20210311/main_640.jpg",
      customers:"John Doe",
      amount:789,
      date:'7/6/2022',
      method:"Cash on delivery",
      status:"Pending"
    },
    {
      id:1235321,
      product: "Acer",
      date:'7/6/2022',
      image:"https://static.acer.com/up/Resource/Acer/Laptops/Aspire_3/rev-jan-2021/20210311/main_640.jpg",
      customers:"John Doe",
      amount:789,
      method:"Cash on delivery",
      status:"Approved"
    },
    {
      id:1235321,
      product: "Acer",
      date:'7/6/2022',
      image:"https://static.acer.com/up/Resource/Acer/Laptops/Aspire_3/rev-jan-2021/20210311/main_640.jpg",
      customers:"John Doe",
      amount:789,
      method:"Cash on delivery",
      status:"Pending"
    },
    {
      id:1235321,
      product: "Acer",
      date:'7/6/2022',
      image:"https://static.acer.com/up/Resource/Acer/Laptops/Aspire_3/rev-jan-2021/20210311/main_640.jpg",
      customers:"John Doe",
      amount:789,
      method:"Cash on delivery",
      status:"Approved"
    } 
  ]
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking Id</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">
              Status
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((rows) => (
            <TableRow
              key={rows.id}
            >
              <TableCell component="th" scope="row" className="tableCell">
                {rows.id}
              </TableCell>
              <TableCell className="tableCell" >
              <div className="cellWrapper">
                <img src={rows.image} alt="" className="image" />
                {rows.product}
              </div>
              </TableCell>
              <TableCell className="tableCell" >{rows.customers}</TableCell>
              <TableCell className="tableCell" >{rows.date}</TableCell>
              <TableCell className="tableCell" >{rows.amount}</TableCell>
              <TableCell className="tableCell" >{rows.method}</TableCell>
              <TableCell className="tableCell" >
                <span className={`status ${rows.status}`}>{rows.status}</span>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default List
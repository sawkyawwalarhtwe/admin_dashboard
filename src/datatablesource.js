export const userColumns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'user', headerName: 'User', width: 230, renderCell: (params) =>{
        return(
            <div className="cellWithImg">
                <img className="cellImg" src={params.row.img} alt='avatar'/>
                {params.row.username}
            </div>
        );
    }   },
    { field: 'email', headerName: 'Email', width: 230 },
    { field: 'age', headerName: 'Age', width: 100 },
    { field: 'status', headerName: 'Status', width: 160,
        renderCell: (params)=>{
            return(
                <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
            )
        }
    },
]

export const userRows = [
    {
        id:1,
        username:"Snow",
        img:'https://pyxis.nymag.com/v1/imgs/7ad/fa0/4eb41a9408fb016d6eed17b1ffd1c4d515-07-jon-snow.rsquare.w330.jpg',
        status:'Active',
        email:'1snow@gmail.com',
        age:35
    },
    {
        id:2,
        username:"Jamie Lannister",
        img:'https://upload.wikimedia.org/wikipedia/en/b/b4/Jaime_Lannister-Nikolaj_Coster-Waldau.jpg',
        status:'Passive',
        email:'2jamie@gmail.com',
        age:42
    },
    {
        id:3,
        username:"Cersie Lannister",
        img:'https://upload.wikimedia.org/wikipedia/en/2/22/Cersei_Lannister_in_Black_Dress_in_Season_5.jpg',
        status:'Passive',
        email:'3cersie@gmail.com',
        age:42
    },
    {
        id:4,
        username:"Arya Stark",
        img:'https://i.pinimg.com/564x/c3/fe/5b/c3fe5b6d484aaefa5640e250196c1c5c.jpg',
        status:'Pending',
        email:'4arya@gmail.com',
        age:16
    },
    {
        id:5,
        username:"Daenerys Targaryen",
        img:'https://i.pinimg.com/originals/77/13/aa/7713aa116b6a1b7675f2449cd07c446d.jpg',
        status:'Passive',
        email:'5daenerys@gmail.com',
        age:38
    },
    {
        id:6,
        username:"Melisandre",
        img:'https://cdn.ndtv.com/tech/gadgets/melisandre_hbo_official_site.jpg',
        status:'Active',
        email:'5daenerys@gmail.com',
        age:150
    }
]
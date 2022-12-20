import logo from '../assets/logo.png'

export const Header = () => {
    return (
     <div style={{position: 'fixed', width: "100%", height: "80px", backgroundColor: "#rgba(255,255,255,var(--tw-bg-opacity))", display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',  padding: '0px 50px 0px 50px'}}>
        <img alt={'Logo'} style={{with: "100%", height: '80px'}} src={logo} />
        {/* <div style={{height: '30px', display: 'flex', flexDirection: 'row', justifyContent: 'center', border: '1px solid black'}}>
            <input type='search' ></input>
            <button>
                <svg style={{width: '25px', height: '25px'}}  role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.9 19.7"><title id="title">Search Icon</title><desc>A magnifying glass icon.</desc><g fill="none" stroke="#0a1e7f"><path strokeLinecap="square" d="M18.5 18.3l-5.4-5.4"></path><circle cx="8" cy="8" r="7"></circle></g>
                </svg>
            </button>
        </div> */}
        <div style={{width: '30%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <h3>Бидний тухай</h3>
            <h3>Хэрэгжүүлсэн төсөл</h3>
            <h3>Хамтран ажиллах</h3>
            <h3>Бидэнтэй холбогдох</h3>
            
        </div>
     </div>
    )
  }
  
import Style from '../../Styles/TeacherProfile.module.css'
import TeacherProfile from '../../assets/TeacherProfile.jpg'
import { MDBCheckbox } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';




function TSittings() {
  return (
  <>
    <div className={`${Style.conter} row  my-3 `} >
    <div className={`${Style.Imageconter}  col`}>
    <img src={TeacherProfile} className={`${Style.ImageProfile}`} alt="..." />
    </div>
    <div className={`${Style.info} w-50 col`}>
    <p>name : Mohammed Yaser Mohammmed </p>
    <p>Email : MohammedYaser@gmail.com</p>
    </div>
    <div className={`${Style.info}  col`}>
    <p>Address : Abomosa Elansary  </p>
    <p>speciality : Arabic </p>
    </div>
    </div>

    <div className={`${Style.conter} row `} >
    <div className={`${Style.Imageconter}  col`}>
      <h2>Notification</h2>
      <ul>
        <li  className={` list-unstyled my-2`}>      <MDBCheckbox name='flexCheck' value='' id='flexCheckChecked' label='Cources Time'  />      </li>
        <li  className={` list-unstyled my-2`}>      <MDBCheckbox name='flexCheck' value='' id='flexCheckChecked' label='Students Questions'  />      </li>
        <li  className={` list-unstyled my-2`}>      <MDBCheckbox name='flexCheck' value='' id='flexCheckChecked' label='tasks Aquired'  />      </li>
        <li  className={` list-unstyled my-2`}>      <MDBCheckbox name='flexCheck' value='' id='flexCheckChecked' label='Activated cources'  />      </li>
        <li  className={` list-unstyled my-2`}>      <MDBCheckbox name='flexCheck' value='' id='flexCheckChecked' label='Accepted cources'  />      </li>
      </ul>
    </div>
    <div className={`${Style.info}  col`}>
    <h2>Privacy</h2>

    <div className={`${Style.info} row`}>
<div className='col'>
<p className='my-3'>password :</p>
<p className='my-3'>Back up Email :</p>
<p className='my-3'>Speciality :</p>
<p className='my-3'>search for demanded cources  :</p>

</div>
<div className='col'>
<button type="button" className='btn btn-danger my-1'>change password</button>
<button type="button" className='btn btn-danger my-1'>change Email</button>
<button type="button" className='btn btn-danger my-1'>change Speciality </button>
<Link to='/demanded' className='btn btn-danger my-1'>Demanded cources</Link>
</div>
    </div>
    </div>

</div>
  
  
  </>
  )
}

export default TSittings;
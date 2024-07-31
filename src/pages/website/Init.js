import { Link } from 'react-router-dom'
import '../../styles/init.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars} from '@fortawesome/free-solid-svg-icons/faBars'
import { faXmark} from '@fortawesome/free-solid-svg-icons/faXmark'
import { useRef, useState } from 'react';
import Footer from '../../component/Footer'

export default function Init({setTranslate}) {
    const [ulBlock, setUlBolck] = useState(true);
    const ul = useRef();
    const iconMenu = useRef();
    const iconClose = useRef(); 
    function handelUl () {
        setUlBolck(e=>!e);
        if(ulBlock) {
            iconMenu.current.style.display = "none";
            iconClose.current.style.display = "block";
            ul.current.style.display = "block"
        } else {
            iconMenu.current.style.display = "block";
            iconClose.current.style.display = "none";
            ul.current.style.display = "none"
        }
    }
    return (
        <div className="init" id='program'>
            <div className="header">
                <div className='header-auth'>
                    <ul>
                        <li><Link to="" className='start' >ابدأ</Link></li>
                        <li><Link className='enter' > تسجيل الدخول </Link></li>
                    </ul>
                </div>
                <div className='header-content'>
                    <ul  className="ul-menu" ref={ul}>
                        <li><Link to="/#addtion" onClick={()=>setTranslate("addtion")}>   </Link></li>
                        <li><Link to="/#about" onClick={()=>setTranslate("about")}>حول</Link></li>
                        <li><Link to="/#advantages" onClick={()=>setTranslate("advantages")}>الميزات</Link></li>
                        <li><Link to="/#houses" onClick={()=>setTranslate("houses")}>العقارات </Link></li>
                        <li><Link to="/#program" onClick={()=>setTranslate("program")}>الرئيسية</Link></li>
                    </ul>
                     <img src={require("../../assets/images/Group.png")} alt="logo" className="logo"/>
                     <div className='icons' onClick={handelUl}>
                         <FontAwesomeIcon icon={faBars} className='menu'  ref={iconMenu}/>
                         <FontAwesomeIcon icon={faXmark} ref={iconClose} className='close'/>                     
                     </div>
                </div>
            </div>
            <div className='init-content'>
                <div className='init-contet-text'>
                    <h3>احصل على الإقامة التركية بكل سهولة مع Assetify</h3>
                    <span>استثمر من أي مكان في العالم واحصل على الإقامة التركية</span>
                    <p>استمع بمجموعة من الفوائد عن طريق استثمار الحد الأدنى 200,000 دولار أمريكي من خلال منصتنا.</p>
                </div>
            </div>
           <Footer/>    
        </div>
    )
 } 
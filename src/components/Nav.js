import React from 'react'
import { GiTalk } from "react-icons/gi";
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className='bg-white rounded p-5 text-center shadow-[0px_0px_20px_-2px_rgba(0,0,0,0.2)]'>
            <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-2 font-Ownglyph_UNZ">
                <Link to="/">
                    <button className='flex flex-row text-slate-500 hover:text-blue-500'>
                        <div className='text-[30px] mt-[10px] mr-[10px]'>
                            <GiTalk />
                        </div>
                        <div className="text-[30px]">창녕군 커뮤니티</div>
                    </button>
                </Link>
                <div>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-2">
                        <Link to="/login"><button className="text-[25px] text-slate-500 hover:text-blue-500">로그인</button></Link>
                        <div className="text-[25px] text-slate-500 hover:text-blue-500">/</div>
                        <Link to="/join"><button className="text-[25px] text-slate-500 hover:text-blue-500">회원가입</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav

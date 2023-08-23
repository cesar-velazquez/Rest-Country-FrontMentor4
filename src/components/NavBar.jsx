import React, { useEffect, useState } from 'react'

export const NavBar = () => {
    const [ismodeDark, setIsmodeDark] = useState(localStorage.getItem('theme') === 'dark')

    const handlechangetheme = () => {
        setIsmodeDark(!ismodeDark)
    }

    useEffect(() => {
        ismodeDark
            ? (document.documentElement.classList.add('dark'), localStorage.setItem('theme', 'dark'))
            : (document.documentElement.classList.remove('dark'), localStorage.setItem('theme', 'light'))
    }, [ismodeDark])
    return (
        <div className='font-nunito-sans text-black flex justify-between p-4 bg-white font-bold darkTheme duration-1000 shadow-md'>
            <div>
                <h2>Where in the world?</h2>
            </div>
            <div>
                {
                    ismodeDark ?
                        <button className='flex items-center gap-2' onClick={handlechangetheme}>
                            <i className='bx bx-sun text-[yellow] border-[1px] rounded-full p-1'></i>
                            <h2>Ligth Mode</h2>
                        </button>
                        :
                        <button className='flex items-center gap-2 ' onClick={handlechangetheme}>
                            <i className='bx bxs-moon border-[1px] bg-[black] text-white p-1 rounded-full  '></i>
                            <h2>Dark Mode</h2>
                        </button>
                }
            </div>
        </div>
    )
}

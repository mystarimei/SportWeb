import React, { createContext, useState, useContext } from 'react';
const AppContext = createContext();
const AppPrvider = ({ children }) => {
    const [activeSidebar, setActiveSidebar] = useState('sideBar');
    const [activeOrderLinklist ,setActiveOrderLinklist] = useState(false);
    const [activeNewsLinklist ,setActiveNewsLinklist] = useState(false);
    const [activeMouseOver,setActiveMouseOver] = useState('footer');
    const showSidebar = () => {
        setActiveSidebar('sideBar activeSidebar')
    }

    const closeSidebar = () => {
        setActiveSidebar('sideBar');
    }
    
    const settingOrderLinklist = () =>{
        setActiveOrderLinklist(!activeOrderLinklist);
        setActiveNewsLinklist(false);
    }

    const settingNewsLinklist = () =>{
        setActiveNewsLinklist(!activeNewsLinklist);
        setActiveOrderLinklist(false);
    }

    const mouseOver = () =>{
        setActiveMouseOver('footer mouseOver')
    }

    const mouseLeave = () =>{
        setActiveMouseOver('footer')
    }

    return <AppContext.Provider
        value={{
            activeSidebar,
            activeOrderLinklist,
            activeNewsLinklist,
            activeMouseOver,
            setActiveOrderLinklist,
            setActiveNewsLinklist,
            showSidebar,
            closeSidebar,
            settingOrderLinklist,
            settingNewsLinklist,
            mouseOver,
            mouseLeave
        }}
    >
        {children}</AppContext.Provider>
}
// custom hook
export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppPrvider }
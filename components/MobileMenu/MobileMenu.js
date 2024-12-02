import React, { Fragment, useState } from 'react';
import List from "@mui/material/List";
import ListItem from "@mui/material/List";
import Collapse from "@mui/material/Collapse";
import Link from 'next/link'

const menus = [
    {
        id: 1,
        title: 'Home',
        link: '/',
    },
    {
        id: 2,
        title: 'About Us',
        link: '/',
    },
    {
        id: 3,
        title: 'Countries',
        link: '/',
    }, 
    // {
    //     id: 4,
    //     title: 'Services',
    //     link: '/',
    // },
    {
        id: 5,
        title: 'Process',
        link: '/',
    },
    {
        id: 6,
        title: 'Contact',
        link: '/',
    },
]

const MobileMenu = () => {

    const [openId, setOpenId] = useState(0);

    const ClickHandler = (e) => {
        e.preventDefault()
        let id
        if(e.target.innerText ==""){
            id = "Home"
        }else{
            id = e.target.innerText.split(" ").join("_");
        }
        const targetElement = document.getElementById(id);
        if(targetElement !== null && targetElement !== undefined){
            let targetPosition
            if(window.scrollY < 80){
                const headerElement = document.getElementById('Header');
                const height = headerElement.clientHeight;
                targetPosition = targetElement.offsetTop - height;
            }else{
                targetPosition = targetElement.offsetTop;
            }
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
              })
        }else{
        }
    }

    return (
        <ul className="xb-menu-primary clearfix">
            {menus.map((item, mn) => {
                return (
                    <ListItem className={item.id === openId ? 'active' : null} key={mn}>
                        {<a className="active" onClick={ClickHandler}
                                href={item.link}>{item.title}</a>
                        }
                    </ListItem>
                )
            })}
        </ul>
    )
}

export default MobileMenu;
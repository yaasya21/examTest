import React, {useState} from "react"
import {NavLink} from "react-router-dom"
import {Endpoints} from "../../../../shared/api/constants/endpoints"
import {KeyboardArrowDown} from "@mui/icons-material"
import {Menu, MenuItem} from "@mui/material"

const ArrowButton = () => {
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <>
            <KeyboardArrowDown
                onClick={handleClick}
                id="avatar-button"
                fontSize="large"
                sx={{color: "white", marginLeft: -2, cursor: "pointer"}}
            />
            <Menu
                id="avatar-menu"
                anchorEl={anchorEl}
                open={open}
                MenuListProps={{
                    "aria-labelledby": "avatar-button",
                }}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                onClose={handleClose}>
                <NavLink to={`${Endpoints.GET_ALL_TALENTS}`}>
                    <MenuItem onClick={handleClose}>Main</MenuItem>
                </NavLink>
                <NavLink to={`${Endpoints.GET_TALENT_BY_ID}/id`}>
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                </NavLink>
                <NavLink to={"/edit"}>
                    <MenuItem onClick={handleClose}>Settings</MenuItem>
                </NavLink>
                <NavLink to={`${Endpoints.GET_ALL_TALENTS}`}>
                    <MenuItem onClick={handleClose}>log out</MenuItem>
                </NavLink>
            </Menu>
        </>
    )
}

export {ArrowButton}

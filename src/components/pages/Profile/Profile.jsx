import React, {useEffect, useState} from "react"
import styles from "./Profile.module.css"
import {ProfileSidebar} from "./components/ProfileSidebar"
import {Aside} from "./components/Aside"
import {useJwtCheck} from "../../../shared/api/hooks"
import {useNavigate} from "react-router-dom"

const Profile = () => {
    const data = useJwtCheck()
    const navigate = useNavigate()
    const [talent, setTalent] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        !data && navigate("/talents/signin")
        setTalent({
            id: 1,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqghHTeMq3Qm98GfOQbr2TaNJxoj3AYsX1TEZ0N9GCmCqCYv0osGYwl4k2bFgsa3433qI&usqp=CAU",
            name: "Billy",
            surname: "Herrington",
            experience: "Python - 3 years",
            location: "North Babylon",
            about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto iste molestiae similique harum vitae maxime temporibus aliquid rerum quo veritatis! Expedita officiis libero earum maxime atque, modi repudiandae nesciunt in officia ratione. Culpa quod consequuntur quae in nemo numquam molestiae voluptatibus, aliquam est delectus! Libero ad quae, similique harum nulla perspiciatis. Illum corrupti architecto non quas aliquam ad, nisi, beatae ea enim eligendi sed repudiandae repellat dolores rem, magni ipsa mollitia dignissimos deleniti dolorem id possimus harum laboriosam hic vero. Odit molestias quo fugiat porro eum repudiandae accusamus quod enim.",
            education:
                "Bachelor of Science in Computer Science University of California, Los Angeles September 2015 - June 2019",
            age: 35,
            email: "johnd.1987@gmail.com",
            phone: "+380505812491",
            socials: {
                facebook: "/facebook",
                twitter: "/twitter",
                github: "/github",
                linkedin: "/linkedin",
            },
        })

        setIsLoaded(true)
    }, [data, navigate])

    return (
        <>
            {isLoaded ? (
                <>
                    <div className={styles.plug}></div>
                    <div className={styles.wrapper}>
                        <ProfileSidebar talent={talent} />
                        <Aside talent={talent} />
                    </div>
                </>
            ) : (
                <h1>Loading...</h1>
            )}
        </>
    )
}

export {Profile}
import React, {useEffect} from "react"
import countryList from "../../../shared/api/constants/countries.json"
import {useForm} from "react-hook-form"
import {registerOptions} from "./validationRules"
import styles from "./SignUp.module.css"
import {useAddTalentsMutation} from "../../../shared/api/services/authentication"
import {NavLink} from "react-router-dom"
import {useNavigate} from "react-router-dom"

const SignUp = () => {
    const [updatePost, result] = useAddTalentsMutation()
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm()

    const onSubmit = (data) => {
        const res = data
        res.birthday = data.birthday.split("-").reverse().join("-")
        updatePost(JSON.stringify(res))
    }
    useEffect(() => {
        if (result.data) {
            localStorage.setItem("jwt-token", result.data["jwt-token"])
            navigate("/")
        }
    }, [navigate, result.data])

    return (
        <>
            <div data-testid="signup" className={styles.signup}>
                <h1>Monetize your Talent</h1>
                <div className={styles.form_wrap}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className={styles.input_wrap}>
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                {...register("name", registerOptions.name)}
                            />
                            {errors.name && (
                                <p className={styles.error}>{errors.name.message}</p>
                            )}
                        </div>
                        <div className={styles.input_wrap}>
                            <label htmlFor="surname">Surname</label>
                            <input
                                type="text"
                                {...register("surname", registerOptions.surname)}
                            />
                            {errors.surname && (
                                <p className={styles.error}>{errors.surname.message}</p>
                            )}
                        </div>
                        <div className={styles.input_wrap}>
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                {...register("email", registerOptions.email)}
                            />
                            {errors.email && (
                                <p className={styles.error}>{errors.email.message}</p>
                            )}
                        </div>
                        <div className={styles.input_wrap}>
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                {...register("password", registerOptions.password)}
                            />
                            {errors.password && (
                                <p className={styles.error}>{errors.password.message}</p>
                            )}
                        </div>
                        <div className={styles.input_wrap}>
                            <label htmlFor="location">Location</label>
                            <select {...register("location", registerOptions.location)}>
                                <option value="">---- Select a country ----</option>
                                {countryList.map((element) => (
                                    <option key={element.cca2} value={element.name}>
                                        {element.name}
                                    </option>
                                ))}
                            </select>
                            {errors.location && (
                                <p className={styles.error}>{errors.location.message}</p>
                            )}
                        </div>
                        <div className={styles.input_wrap}>
                            <label htmlFor="birthday">Date of Birth</label>
                            <input
                                type="date"
                                min="1900-01-01"
                                max={new Date().toISOString().split("T")[0]}
                                {...register("birthday", registerOptions.birthday)}
                            />
                            {errors.birthday && (
                                <p className={styles.error}>{errors.birthday.message}</p>
                            )}
                        </div>
                        <button type="submit">SIGN UP</button>
                    </form>
                    <p className={styles.or}>or</p>
                    <p className={styles.signin_check}>
                        Already on SkillScope?{" "}
                        <NavLink
                            className={styles.signin_form_elem}
                            to={"/talents/signin"}>
                            Sign in
                        </NavLink>
                    </p>
                </div>
            </div>
        </>
    )
}

export {SignUp}

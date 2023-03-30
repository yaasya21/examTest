import React from "react"
import {useForm} from "react-hook-form"
import styles from "./LoginPopup.module.css"
import {registerOptions} from "../pages/SignUp/validationRules.js"
import {NavLink} from "react-router-dom"

const LoginPopup = ({setVisibilityLoginPopup}) => {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm()

    const registerOptionsPassword = {
        required: registerOptions.password.required,
        minLength: registerOptions.password.minLength,
        maxLength: registerOptions.password.maxLength,
    }

    const onSubmit = (data) => {}

    const loginStyle = !setVisibilityLoginPopup
        ? {position: "absolute", zIndex: 99}
        : {position: "fixed", zIndex: 101}

    return (
        <>
            <div
                className={styles.login_background}
                style={{display: !setVisibilityLoginPopup ? "none" : "flex"}}
                onClick={() => setVisibilityLoginPopup && setVisibilityLoginPopup(false)}
            />
            <form
                className={styles.login_form}
                onSubmit={handleSubmit(onSubmit)}
                style={loginStyle}>
                <h2 className={styles.login_form_elem}>Log in</h2>
                <div className={styles.login_form_elem}>
                    <label>Email</label>
                    <br />
                    <input
                        type="text"
                        {...register("loginEmail", registerOptions.email)}
                        className={styles.login_form_elem}
                    />
                    {errors.loginEmail && (
                        <p className={styles.error}>{errors.loginEmail.message}</p>
                    )}
                </div>
                <div className={styles.login_form_elem}>
                    <label>Password</label>
                    <br />
                    <input
                        type="password"
                        {...register("loginPassword", registerOptionsPassword)}
                        className={styles.login_form_elem}
                    />
                    {errors.loginPassword && (
                        <p className={styles.error}>{errors.loginPassword.message}</p>
                    )}
                </div>
                <button className={styles.login_form_elem} type="submit">
                    LOG IN
                </button>
                <p className={styles.login_form_elem}>or</p>
                <p>
                    Want to join SkillScope?{" "}
                    <NavLink
                        className={styles.login_form_elem}
                        onClick={() =>
                            setVisibilityLoginPopup && setVisibilityLoginPopup(false)
                        }
                        to={"/talents/signup"}>
                        <b>Sign up</b>
                    </NavLink>
                </p>
            </form>
        </>
    )
}

export {LoginPopup}

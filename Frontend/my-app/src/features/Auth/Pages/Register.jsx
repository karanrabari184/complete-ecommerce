import React, { useState } from 'react';
import '../css/Register.css';
import { UseAuth } from '../Hook/UsesAuth';


const Register = () => {

    const [email, Setemail] = useState("")
    const [contact, Setcontact] = useState("")
    const [password, Setpassword] = useState("")
    const [fullname, Setfullname] = useState("")

    const { HandleRegister } = UseAuth()

    async function handleSubmit(e) {
        e.preventDefault()
        await HandleRegister({
            fullname: fullname,
            email: email,
            password: password,
            contact: contact
        })
    }
    return (
        <div className="register-page">
            {/* Left side: brand + benefits */}
            <aside className="register-aside">
                <div className="register-brand">Snitch</div>

                <div className="register-aside-content">
                    <h2 className="register-aside-title">
                        Your next favourite thing is a few clicks away.
                    </h2>
                    <p className="register-aside-text">
                        Create a free account to track orders, save your wishlist and
                        check out faster.
                    </p>

                    <ul className="register-benefits">
                        <li>Free delivery on your first order</li>
                        <li>Easy 7-day returns</li>
                        <li>Early access to sales</li>
                    </ul>
                </div>

                {/* Decorative shapes (pure CSS) */}
                <div className="register-shape register-shape-one"></div>
                <div className="register-shape register-shape-two"></div>
            </aside>

            {/* Right side: form */}
            <main className="register-main">
                <div className="register-card">
                    <div className="register-header">
                        <h1 className="register-title">Create your account</h1>
                        <p className="register-subtitle">It takes less than a minute.</p>
                    </div>

                    <form className="register-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="fullname">Full name</label>
                            <input
                                type="text"
                                id="fullname"
                                name="fullname"
                                placeholder="Riya Patel"
                                onInput={(e) => Setfullname(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="you@example.com"
                                onInput={(e) => Setemail(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="contact">Contact number</label>
                            <input
                                type="tel"
                                id="contact"
                                name="contact"
                                placeholder="98765 43210"
                                onInput={(e) => Setcontact(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="At least 8 characters"
                                onInput={(e) => Setpassword(e.target.value)}

                            />
                            <span className="form-hint">
                                Use 8 or more characters with letters and numbers.
                            </span>
                        </div>

                        <button type="submit" className="register-button">
                            Create account
                        </button>
                    </form>
                    <div className="register-divider"><span>or</span></div>

                    <a href="/api/auth/google" className="gsi-button">
                        <svg
                            className="gsi-icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 48 48"
                            aria-hidden="true"
                        >
                            <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
                            <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
                            <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
                            <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
                        </svg>
                        <span className="gsi-text">Continue with Google</span>
                    </a>

                    <p className="register-footer">
                        Already have an account? <a href="/login">Log in</a>
                    </p>
                </div>
            </main>
        </div>
    );
};

export default Register;
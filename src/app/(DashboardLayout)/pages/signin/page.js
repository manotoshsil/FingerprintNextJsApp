"use client"
import React from "react";
import signIn from "../../../firebase/auth/signin";
import { useRouter } from "next/navigation"

function Page() {
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
	const [error, setError] = React.useState("");
    const router = useRouter()

    const handleForm = async (event) => {
        event.preventDefault()
        setError("");
        const { result, error } = await signIn(email, password);

        if (error) {
			setError("Wrong Credentials");
            return console.log(error)
        }

        // else successful
        console.log(result)
        return router.push("/ui/student/student-list")
    }
    return (<div className="wrapper">
        <div className="form-wrapper">
            
            <form onSubmit={handleForm} type="post" className="form">
                {/* <label htmlFor="email">
                    <p>Email</p>
                    <input onChange={(e) => setEmail(e.target.value)} required type="email" name="email" id="email" placeholder="example@mail.com" />
                </label>
                <label htmlFor="password">
                    <p>Password</p>
                    <input onChange={(e) => setPassword(e.target.value)} required type="password" name="password" id="password" placeholder="password" />
                </label>
                <p>
                    <button style={{ backgroundColor: "blue", marginTop:"3rem" }} type="submit">Sign in</button>
                </p> */}
                <div className="container">
		<div className="forms-container">
			<div className="signin-signup">
			    { error && <h4 style={{color: "red", textAlign: "center"}}> {error}</h4>}
					<h2 className="title">Sign in</h2>
					<div className="input-field">
						<i className="fas fa-user"></i>
						<input  onChange={(e) => setEmail(e.target.value)} required type="email" name="email" id="email" placeholder="example@mail.com" />
					</div>
					<div className="input-field">
						<i className="fas fa-lock"></i>
						<input onChange={(e) => setPassword(e.target.value)} required type="password" name="password" id="password" placeholder="password"/>
					</div>
					<input type="submit" value="Login" className="btn solid" />
					<p className="social-text">Or Sign in with social platforms</p>
					<div className="social-media">
						<a href="#" className="social-icon">
							<i className="fab fa-facebook-f"></i>
						</a>
						<a href="#" className="social-icon">
							<i className="fab fa-twitter"></i>
						</a>
						<a href="#" className="social-icon">
							<i className="fab fa-google"></i>
						</a>
						<a href="#" className="social-icon">
							<i className="fab fa-linkedin-in"></i>
						</a>
					</div>
				
				
					
				
			</div>
		</div>

		<div className="panels-container">
			<div className="panel left-panel">
				<div className="content">
					<h3>New to our community ?</h3>
					<p>
						Discover a world of possibilities! Join us and explore a vibrant
          community where ideas flourish and connections thrive.
					</p>
					{/* <button className="btn transparent" id="sign-up-btn">
						Sign up
					</button> */}
				</div>
				<img  src="https://i.ibb.co/6HXL6q1/Privacy-policy-rafiki.png" className="image" alt="" />
			</div>
			<div className="panel right-panel">
				<div className="content">
					<h3>One of Our Valued Members</h3>
					<p>
						Thank you for being part of our community. Your presence enriches our
          shared experiences. Lets continue this journey together!
					</p>
					<button className="btn transparent" id="sign-in-btn">
						Sign in
					</button>
				</div>
				<img src="https://i.ibb.co/nP8H853/Mobile-login-rafiki.png"  className="image" alt="" />
			</div>
		</div>
	</div>

            </form>
        </div>

    </div>);
}

export default Page;
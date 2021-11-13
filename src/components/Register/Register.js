import React, { useState } from "react";
import { Link, useHistory, useLocation } from 
"react-router-dom";
import { Form, Button} from "react-bootstrap";
import useAuth from "../Hooks/useAuth";
import login from "../../images/log/login.jpg";

const Register = () => {
  const {
    signInWithGoogle,
    createAccountWithGoogle,
    setUser,
    setIsLoading,
    updateName,
  } = useAuth();

  const history = useHistory();
  const location = useLocation();
  const url = location.state?.from || "/home";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleGetName = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const handleGetEmail = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  const handleGetPassword = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    createAccountWithGoogle(email, password)
      .then((res) => {
        setIsLoading(true);
        updateName(name);
        setUser(res.user);
        history.push(url);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((res) => {
        setIsLoading(true);
        setUser(res.user);
        history.push(url);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div>
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-md-6 text-center">
            <h3 className="mb-4 mt-3">
              <b>Register</b>
            </h3>
           
            <Form onSubmit={handleRegistration}>
              <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Control
                    type="name"
                    name="name"
                    onBlur={handleGetName}
                    placeholder="You Name"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    name="email"
                    onBlur={handleGetEmail}
                    placeholder="Enter email"
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    type="password"
                    name="password"
                    onBlur={handleGetPassword}
                    placeholder="Password"
                  />
                </Form.Group>
                <Button variant="info" className="px-5" type="submit">
                  <b>Register</b>
                </Button>
                <br />
                <p>
                {" "}
                Signed Up? <Link to="/login">Please Login</Link>
              </p>
            </Form>
            <p>----- Or Register With -----</p>

              <button
                className="bg-info px-3 py-1 w-100 rounded my-1"
                onClick={handleGoogleLogin}
              >
                <img
                  className="img-fluid float-start"
                  style={{ height: "40px" }}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRttcAHlykQMvm8VIF8StLe3wTztMVxFe4_eQ&usqp=CAU"
                  alt=""
                />
                Google Sign In
              </button>

           
          </div>
          <div className="col-md-6">
            <img className="img-fluid" src={login} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;





 
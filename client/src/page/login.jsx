import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GptIcon } from "../assets";
import { LoginComponent } from "../components";
import { setLoading } from "../redux/loading";
import "./style.scss";

const Login = () => {
  const [auth, setAuth] = useState(false);
  const { loading } = useSelector((state) => state);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const path = window.location.pathname;

  useEffect(() => {
    if (path === "/login/auth") {
      setAuth(true);
      setTimeout(() => {
        dispatch(setLoading({ site: false }));
      }, 1000);
    } else {
      setAuth(false);
      setTimeout(() => {
        dispatch(setLoading({ site: false }));
      }, 1000);
    }
  }, [path, loading]);

  return (
    <div className="Auth">
      <div className="inner">
        {auth ? (
          <LoginComponent />
        ) : (
          <div className="suggection">
            <div>
              <GptIcon />
            </div>

            <div>
              <p>Welcome to ChatGPT</p>
              <p>Log in with your OpenAI account to continue</p>
            </div>

            <div className="btns">
              <button
                onClick={() => {
                  navigate("/login/auth");
                }}
              >
                Log in
              </button>
              <button
                onClick={() => {
                  navigate("/signup");
                }}
              >
                Sign up
              </button>
            </div>
          </div>
        )}

        <div className="bottum">
          <div className="start">
            <a href="https://openai.com/policies/terms-of-use" target="_blank">
              Terms of use
            </a>
          </div>
          <div className="end">
            <a
              href="https://openai.com/policies/privacy-policy"
              target="_blank"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

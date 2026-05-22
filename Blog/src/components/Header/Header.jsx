import React from "react";
import { Link } from "react-router-dom";
import { Container, Logo, LogoutBtn } from "../index";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", path: "/", show: true },
    { name: "Login", path: "/login", show: !authStatus },
    { name: "Signup", path: "/signup", show: !authStatus },
    { name: "All Posts", path: "/posts", show: authStatus },
    { name: "Create Post", path: "/posts/create", show: authStatus },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <Container>
        <nav className="flex items-center justify-between py-4">
          
          <Link to="/" className="flex items-center">
            <Logo width="100px" />
          </Link>

          <ul className="flex items-center gap-2 flex-wrap">
            {
              navItems.filter((item) => item.show).map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.path)}
                    className="px-4 py-2 text-sm font-medium rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
                  >
                    {item.name}
                  </button>
                </li>
              ))
            }

            {
              authStatus ? (
                <li>
                  <LogoutBtn />
                </li>
              ) : null
            }
          </ul>

        </nav>
      </Container>
    </header>
  );
}

export default Header;
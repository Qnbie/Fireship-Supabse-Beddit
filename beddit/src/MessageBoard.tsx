import {
    Link,
    Outlet,
    useLocation,
    useNavigate,
    useParams,
  } from "react-router-dom";

export default function MessageBoard() {
    return (
        <div>
            <Link to="/1">
                <h2 className="message-board-header-link">Message Board</h2>
            </Link>
            <Outlet/>
        </div>
    )
}
import { useEffect, useState } from "react";
import api from "../services/api";

function Home() {

    const [status, setStatus] = useState("");

    useEffect(() => {

        api.get("/health")
            .then((res) => {
                setStatus(res.data.ok ? "Backend Connected ✅" : "Failed");
            })
            .catch(() => {
                setStatus("Backend Not Reachable ❌");
            });

    }, []);

    return (
        <>
            <h1>Home Page</h1>
            <p>{status}</p>
        </>
    );
}

export default Home;
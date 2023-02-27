/*script 태그로 외부 자바스크립트 불러올 때*/
import { useEffect, useState } from "react";

const useScript = (src) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let script = document.querySelector(`script[src="${src}"]`);

        if (!script) {
            script = document.createElement("script");
            script.src = src;
            script.async = true;
        }

        const handleLoad = () => setLoading(false);
        const handleError = (error) => setError(error);

        script.addEventListener("load", handleLoad);
        script.addEventListener("error", handleError);

        document.body.appendChild(script);

        return () => {
            script.removeEventListener("load", handleLoad);
            script.removeEventListener("error", handleError);
        };
    }, [src]);

    return [loading, error];
}

export default useScript;
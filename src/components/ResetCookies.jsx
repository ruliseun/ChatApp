import { useEffect }  from 'react'

const ResetCookies = () => {
    useEffect(() => {
        window.addEventListener('beforeunload', () => {
          document.cookie.split(";").forEach(function(c) {
            document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
          });
        });
    }, []);
    
    return null;
}

export default ResetCookies

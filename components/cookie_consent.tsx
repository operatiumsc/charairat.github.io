import { CookieConsent } from 'react-cookie-consent';

export default function CookieConsentNotify() {
    return (
        <div>
            <CookieConsent
                location="bottom"
                buttonText="Accept"
                cookieName="myWebsiteCookieConsent"
                style={{ background: "#1a202c" }}
                buttonStyle={{ background: "#e2e8f0", color: "#1a202c", borderRadius: "4px" }}
                expires={150}
            >
                This website uses cookies to enhance the user experience. By using this website, you consent to our use of cookies.
            </CookieConsent>
        </div>

    );
}


import Image from "next/image"

export default function Abstract() {
    return (
        <>
            <div className="wrapper">
                <header>
                    <div className="inner-wrapper">
                        <div className="header-logo">
                            <Image src="/abstract.svg" width={126} height={32} alt="Abstract logo" />
                            <a className="header-title" href="#">
                                Help Center
                            </a>
                        </div>
                        <div className="header-actions">
                            <button className="submit-request">Submit a request</button>
                            <button className="sign-in">Sign In</button>
                        </div>
                    </div>
                </header>
                <main>
                    <div className="inner-wrapper">
                        <section className="search-section">
                            <h1>How can we help?</h1>
                            <input type="search" placeholder="Search" id="search-input" />
                        </section>
                        <section className="main-list">
                            <div className="content-group">
                                <img src="https://theme.zdassets.com/theme_assets/2197739/aed6500f4da41c641f3de5d96247eb6654e9c386.png" alt="Manage your account image" width={50} height={50} />
                                <div className="group-column">
                                    <h3>Using Abstract</h3>
                                    <p>Abstract lets you manage, version, and document your designs in one place.</p>
                                    <a href="#">Learn more --</a>
                                </div>
                            </div>
                            <div className="content-group">
                                <img src="https://theme.zdassets.com/theme_assets/2197739/aed6500f4da41c641f3de5d96247eb6654e9c386.png" alt="Manage your account image" width={50} height={50} />
                                <div className="group-column">
                                    <h3>Manage your account</h3>
                                    <p>Configure your account settings, such as your email, profile details, and password.</p>
                                    <a href="#">Learn more --</a>
                                </div>
                            </div>
                            <div className="content-group">
                                <img src="https://theme.zdassets.com/theme_assets/2197739/aed6500f4da41c641f3de5d96247eb6654e9c386.png" alt="Manage your account image" width={50} height={50} />
                                <div className="group-column">
                                    <h3>Manage organizations, teams, and projects</h3>
                                    <p>Use Abstract organizations, teams, and projects to organize your people and your work.</p>
                                    <a href="#">Learn more --</a>
                                </div>
                            </div>
                            <div className="content-group">
                                <img src="https://theme.zdassets.com/theme_assets/2197739/aed6500f4da41c641f3de5d96247eb6654e9c386.png" alt="Manage your account image" width={50} height={50} />
                                <div className="group-column">
                                    <h3>Manage billing</h3>
                                    <p>Change subscriptions and payment details.</p>
                                    <a href="#">Learn more --</a>
                                </div>
                            </div>
                            <div className="content-group">
                                <img src="https://theme.zdassets.com/theme_assets/2197739/aed6500f4da41c641f3de5d96247eb6654e9c386.png" alt="Manage your account image" width={50} height={50} />
                                <div className="group-column">
                                    <h3>Authenticate to Abstract</h3>
                                    <p>Set up and configure SSO, SCIM, and Just-in-Time provisioning.</p>
                                    <a href="#">Learn more --</a>
                                </div>
                            </div>
                            <div className="content-group">
                                <img src="https://theme.zdassets.com/theme_assets/2197739/aed6500f4da41c641f3de5d96247eb6654e9c386.png" alt="Manage your account image" width={50} height={50} />
                                <div className="group-column">
                                    <h3>Abstract support</h3>
                                    <p>Get in touch with a human.</p>
                                    <a href="#">Learn more --</a>
                                </div>
                            </div>
                        </section>
                    </div>
                </main>
                <footer>
                    <div className="inner-wrapper">
                        <div>
                            <h3>Abstract</h3>
                            <ul className="footer-list">
                                <li><a href="#">Start trial</a></li>
                                <li><a href="#">Pricing</a></li>
                                <li><a href="#">Download</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3>Resources</h3>
                            <ul className="footer-list">
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Help Center</a></li>
                                <li><a href="#">Release Notes</a></li>
                                <li><a href="#">Status</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3>Community</h3>
                            <ul className="footer-list">
                                <li><a href="#">Twitter</a></li>
                                <li><a href="#">Linkedin</a></li>
                                <li><a href="#">Facebook</a></li>
                                <li><a href="#">Dribble</a></li>
                                <li><a href="#">Podcasts</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3>Company</h3>
                            <ul className="footer-list">
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Careers</a></li>
                                <li><a href="#">Legal</a></li>
                            </ul>
                            <h4>Contact Us</h4>
                            <a href="#">info@abstract.com</a>
                        </div>
                        <div>
                            <Image src="/abstract_logo.svg" width={35} height={35} alt="Abstract logo" />
                            <ul className="footer-list copyright">
                                <li>@ Copyright 2023</li>
                                <li>Abstract Studio Design, Inc.</li>
                                <li>All rights reserved</li>
                            </ul>
                        </div>
                    </div>
                </footer>
            </div>
            <button className="footer-help">Help</button>
            <style jsx>
                {`
                    h1 {
                        font-size: 5rem;
                        font-weight: 400;
                    }

                    h3 {
                        font-size: 1.5rem;
                        font-weight: bold;
                    }

                    h4 {
                        font-size: 1rem;
                        font-weight: bold;
                    }

                    a:hover {
                        text-decoration: underline;
                    }

                    .wrapper {
                        display: grid;
                        grid-template-rows: 88px 1fr minmax(10vh, auto);
                        min-height: 100vh;
                        min-height: 100dvh;
                        font-family: var(--ff-base);
                    }

                    .inner-wrapper {
                        width: 90%;
                        max-width: 1900px;
                        height: 100%;
                        margin: auto;
                    }

                    header {
                        grid-row: 1;
                        background: #000;
                        padding-inline: 1.875rem;
                        color: #fff;
                    }

                    header .inner-wrapper {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                    }

                    .header-logo {
                        display: flex;
                        align-items: center;
                        gap: 1rem;
                    }

                    .header-title {
                        padding-inline: 0.5rem;
                        border-left: 2px solid #fff;
                        font-size: 1.5rem;
                        font-weight: normal;
                    }

                    .header-actions button {
                        border: none;
                        padding: 0.75rem 1.5rem;
                        border-radius: 0.5rem;
                        font-size: 1.5rem;
                        display: inline-block;
                        cursor: pointer;
                    }

                    .header-actions button:nth-child(1) {
                        border: 1px solid #fff;
                        background: var(--bg-input-dark);
                        color: #fff;
                        margin-inline: 1rem;
                    }

                    .header-actions button:nth-child(2) {
                        background: var(--bg-input-primary);
                        color: #fff;
                    }

                    .header-actions button:nth-child(2):hover {
                        background: #fff;
                        color: #000;
                    }

                    main {
                        grid-row: 2;
                        background: #fff;
                        min-height: 1600px;
                    }

                    main .search-section {
                        background: var(--bg-lile-base);
                        padding: 3rem;
                        display: grid;
                        place-items: center;
                        gap: 1rem;
                    }

                    main .search-section input {
                        padding: 1rem;
                        border-radius: 0.25rem;
                        border: 1px solid #999;
                        font-size: 1.25rem;
                        font-weight: 400;
                        line-height: 1.5rem;
                        width: 100%;
                    }

                    main .main-list {
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        gap: 2rem;
                    }

                    .content-group {
                        display: flex;
                        align-items: center;
                    }

                    footer {
                        grid-row: 3;
                        background: #000;
                        color: #fff;
                        padding: 3rem 1.875rem 3.75rem;
                    }

                    footer .inner-wrapper {
                        display: grid;
                        grid-template-columns: repeat(5, 1fr);
                        padding-bottom: 6.25rem;
                        position: relative;
                    }

                    footer .inner-wrapper div:last-child {
                        position: absolute;
                        bottom: 0;
                        right: 0;
                    }

                    footer h4 {
                        margin-top: 1.5rem;
                        margin-bottom: 0.5rem;
                    }

                    .footer-list {
                        padding-top: 1rem;
                        list-style-type: none;
                    }

                    .footer-list li a {
                        font-size: 1rem;
                        line-height: 1.5rem;
                    }

                    .footer-list.copyright li {
                        font-size: 1.25rem;
                        line-height: 1.75rem;
                    }

                    .footer-help {
                        position: fixed;
                        bottom: 1rem;
                        right: 2rem;
                        border-radius: 3rem;
                        background: var(--bg-input-primary);
                        color: #fff;
                        font-size: 1rem;
                        font-weight: bold;
                        line-height: 1.25rem;
                        padding: 0.75rem 2rem 0.75rem 3rem;
                        border: 1px solid var(--bg-input-primary);
                        cursor: pointer;
                    }

                    .footer-help::before {
                        content: '?';
                        position: absolute;
                        left: 1rem;
                        top: 0.6rem;
                        width: 1.25rem;
                        height: 1.25rem;
                        border-radius: 50%;
                        border: 2px solid #fff;
                        font-weight: bold;
                    }
                `}
            </style>
        </>
    )
}

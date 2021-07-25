import Head from 'next/head';
import A from './Link';

const MainContainer = ({ children, keywords }) => {
    return (
        <>
            <Head>
                <meta keywords={keywords}></meta>
                <title>Next is working!</title>
            </Head>
            <div>
                <div className="navbar">
                    <A href="/" text="Home" />
                    <A href="/users" text="Users" />
                </div>
                <div className="mainBlock">
                    {children}
                </div>
                <style jsx>
                    {`
                    .navbar {
                        background: gold;
                        padding: 20px;
                    }

                    .mainBlock {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex-direction: column;
                    }

                `}
                </style>
            </div>
        </>
    )
}

export default MainContainer

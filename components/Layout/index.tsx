import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import { ReactNode } from "react"
import styles from "./Layout.module.css";
import Head from "next/head";

interface layoutProps {
    children: ReactNode;
    pageTitle : string;
}

export default function Layout(props : layoutProps) {
    const {children, pageTitle} = props
    return (
        <>
        <Head>
            <title>NextJS Basic - { " " } {pageTitle} Page</title>
            <meta name="description" content="Website NextJS Basic" />
        </Head>
        <div className={styles.container}>
            <Header />
            <div className={styles.content  }>{ children }</div>
            <Footer />
        </div>
        </>
    )
}
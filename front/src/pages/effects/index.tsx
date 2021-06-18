import React from "react";
import styles from "./index.less"
import Heart from "./heart/heart";
import Bagua from "./bagua/bagua";
export default class Effects extends React.Component {
    render() {
        return <div className={styles.container}>
            <div className={styles.content}>
                <p className={styles.title}>CSS奇思妙想，玩儿懂CSS也是个技术活儿！！</p>
                <div className={styles.list}>
                    <Heart />
                    <Bagua />
                </div>
            </div>
        </div>;
    }
}
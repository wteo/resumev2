import React from "react";

import styles from './JobDescription.module.css';

function JobDescription() {
    return (
        <div className={styles.jobDescriptionStyle}>
            <div className={styles.descriptionContainer}>
                <p className={styles.dotPoint}>*</p>
                <p className={styles.descriptionPar}>Involves in key projects to automate parts of Accounts Receivables (AR) procedure, testing system and providing feedback.</p>
                <p className={styles.whiteSpaceAfterDescription}></p>
            </div>
            <div className={styles.descriptionContainer}>
                <p className={styles.dotPoint}>*</p>
                <p className={styles.descriptionPar}>Maintains day-to-day communication with clients via email/phone concerning aged/outstanding debts, liaising with high-profile personas, including CFOs, Company Secretaries, Senior Accountants, etc.</p>
                <p className={styles.whiteSpaceAfterDescription}></p>
            </div>
            <div className={styles.descriptionContainer}>
                <p className={styles.dotPoint}>*</p>
                <p className={styles.descriptionPar}>Where necessary, contacts clients for payment and arranges/negotiates payment schedules.</p>
                <p className={styles.whiteSpaceAfterDescription}></p>
            </div>
        </div>
    );
}

export default JobDescription;
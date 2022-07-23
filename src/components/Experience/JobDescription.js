import React from "react";

import styles from './JobDescription.module.css';

function JobDescription() {
    return (
        <ul className={styles.jobDescriptionStyle}>
            <li className={styles.task}>
                Involves in key projects to automate parts of Accounts Receivables (AR) procedure, testing system and providing feedback.
            </li>
            <li className={styles.task}>
                Maintains day-to-day communication with clients via email/phone concerning aged/outstanding debts, liaising with high-profile personas, including CFOs, Company Secretaries, Senior Accountants, etc.
            </li>
            <li className={styles.task}>
                Where necessary, contacts clients for payment and arranges/negotiates payment schedules.
            </li>
        </ul>
    );
}

export default JobDescription;
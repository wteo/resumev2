import React from "react";

import styles from './JobDescription.module.css';

function JobDescription() {
    return (
        <div className={styles.jobDescriptionStyle}>
            <p>Involves in key projects to automate parts of Accounts Receivables (AR) procedure, testing system and providing feedback.</p>
            <p>Maintains day-to-day communication with clients via email/phone concerning aged/outstanding debts, liaising with high-profile personas, including CFOs, Company Secretaries, Senior Accountants, etc.</p>
            <p>Where necessary, contacts clients for payment and arranges/negotiates payment schedules.</p>
        </div>
    );
}

export default JobDescription;
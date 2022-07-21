import React from 'react';

import styles from './Education.module.css';

import NavTitleStyle from '../UI/Nav-Title-style';
import Course from './Course';

function Education() {

    const coursesArr = [{
        courseTitle: 'React - The Complete Guide',
        lecturer: 'By Maximilian Schwarzmuller',
        date: 'Feb 2022 – Present | Udemy'
    }, {
        courseTitle: 'The Modern Javascript Bootcamp Course',
        lecturer: 'By Colt Steele, Stephen Grider',
        date: 'Aug 2021 – Apr 2022 | Udemy'
    }, {
        courseTitle: 'Learning the basics of CSS',
        date: 'Sept 2021 | Codecademy'
    }, {
        courseTitle: 'Learning the basics of HTML',
        date: 'Sept 2021 | Codecademy'
    }, {
        courseTitle: 'Bachelor of Laws',
        date: 'Completed 2012 | The University of Western Australia'
    }, {
        courseTitle: 'Bachelor of Arts (Communication Studies)',
        date: 'Completed 2012 | The University of Western Australia'
    }];

    return (
        <div className={styles.educationContainer}>
            <NavTitleStyle navColor='alt'>
                Education
            </NavTitleStyle>
            <div className={styles.coursesContainer}>
                <Course 
                    title={coursesArr[0].courseTitle}
                    lecturer={coursesArr[0].lecturer}
                    date={coursesArr[0].date}
                />
                <Course 
                    title={coursesArr[1].courseTitle}
                    lecturer={coursesArr[1].lecturer}
                    date={coursesArr[1].date}
                />
                <Course 
                    title={coursesArr[2].courseTitle}
                    date={coursesArr[2].date}
                />
                <Course 
                    title={coursesArr[3].courseTitle}
                    date={coursesArr[3].date}
                />
                <Course 
                    title={coursesArr[4].courseTitle}
                    date={coursesArr[4].date}
                />
                <Course 
                    title={coursesArr[5].courseTitle}
                    date={coursesArr[5].date}
                />
            </div>
        </div>
    );
}

export default Education;
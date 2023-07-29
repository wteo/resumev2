import React from 'react';

import styles from './Education.module.css';

import NavTitleStyle from '../../UI/Nav-Title-style';
import Course from './Course';

function Education() {

    const coursesArr = [{
        courseTitle: 'React - The Complete Guide',
        lecturer: 'By Maximilian Schwarzmuller',
        date: 'Feb 2022 – Oct 2022 | Udemy'
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
    }];

    return (
        <div className={styles.educationContainer} id='education'>
            <NavTitleStyle navColor='alt'>
                Education
            </NavTitleStyle>
            <div className={styles.coursesContainer}>
                { coursesArr.map(course => <Course title={course.courseTitle} lecturer={course.lecturer ?? ''} date={course.date} />) }
            </div>
        </div>
    );
}

export default Education;
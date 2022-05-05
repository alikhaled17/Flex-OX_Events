import React from 'react'
import SelectBox from './SelectBox';
import styles from '../styles/Home.module.css'
import StyledBtn from '../StyledComponents/StyledBtn';
import StyledTag from '../StyledComponents/StyledTag';
import StyledTitle from '../StyledComponents/StyledTitle';

export default function Header() {



  return (
    <div className={styles.container}>

      <div className={styles.header}>
        <StyledTitle>Events</StyledTitle>
        <div className={styles.work_spaces}>
          <div className={styles.select}>
            <SelectBox />
          </div> 
          <StyledBtn>Create Meetup!</StyledBtn>
        </div>
        <div className={styles.tags}>
          <StyledTag isActive={true}><span>Events</span></StyledTag>
          <StyledTag isActive={false}><span>Meetups</span></StyledTag>
          <StyledTag isActive={true}><span>Online</span></StyledTag>
          <StyledTag isActive={true}><span>In Person</span></StyledTag>
        </div>
      </div>
    </div>
  )
}

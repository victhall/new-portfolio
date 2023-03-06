import classes from './Profile.module.css';
import ProjectList from '../components/ProjectList';
import Contact from './Contact';

export default function Profile() {
  return (
    <div className={classes['profile__container']}>
      <main className={classes['main__text']}>
        <h1>Victoria Hall is a Freelance Frontend Developer based in Toronto, Canada
          with a passion for thoughtful UI and engaging user experiences. Her work focuses on creating meaningful
          digital utilities for the material world.</h1>
          <Contact />
      </main>
      <ProjectList />
    </div>
  )
}


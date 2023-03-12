import classes from './Profile.module.css';
import ProjectList from '../components/ProjectList';
import Contact from './Contact';

export default function Profile() {
  return (
    <div className={classes['profile__container']}>
      <main className={classes['main__text']}>
        <h1>Hey! I'm Victoria, a Freelance Frontend Developer based in Toronto, Canada. I'm passionate about crafting thoughtful UI and creating engaging user experiences that resonate with people. My main focus is to develop meaningful digital tools that help make our everyday lives better in the physical world.</h1>
          <Contact />
      </main>
      <ProjectList />
    </div>
  )
}


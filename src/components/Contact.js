import classes from './Contact.module.css'

export default function NavBar() {

  return (
    <footer>
      <div className={classes['contact__links']}>
        <a href='https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=victoriahall.dev@gmail.com&su=Hi Victoria!&shva=1' target='_blank' rel='noopener noreferrer'>Email</a>
        <a href='https://github.com/victhall' target='_blank' rel='noreferrer'>Github</a>
        <a href='https://resume.creddle.io/resume/7eb55limyg3' target='_blank' rel='noreferrer'>CV</a>
      </div>
    </footer>
  )
}
import Project from './Project';
import classes from './ProjectList.module.css';

const project_data = [{
  id: '01',
  title: 'Messenger',
  icon: 'https://cdn.sanity.io/images/lcrnwy6l/production/37974644667e33bbeda32d58d7ace85e7fd52743-67x67.svg?w=130',
  image: 'https://cdn.dribbble.com/users/1281594/screenshots/14340699/media/7675a2215bd4960c065cbc66c574a48b.jpg?compress=1&resize=1600x1200&vertical=top',
  short_desc: 'MSN inspired web application allowing users to create individual chatrooms.',
  long_desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam malesuada eros at dolor faucibus blandit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus porta, eros quis ultrices viverra, nibh magna dapibus lorem, et faucibus orci augue vitae nisl. Aenean tempus ex neque, sed tempor lacus maximus sit amet. Cras vitae magna nec massa tempor luctus. Mauris lacinia eros non felis sagittis, ut tempor ante mollis. Aenean eu tincidunt massa.',
  tech: ['React', 'HTML', 'CSS', 'Firebase']
},
{
  id: '02',
  title: 'Main Event',
  icon: 'https://cdn.sanity.io/images/lcrnwy6l/production/37974644667e33bbeda32d58d7ace85e7fd52743-67x67.svg?w=130',
  image: 'https://cdn.dribbble.com/users/1281594/screenshots/14340699/media/7675a2215bd4960c065cbc66c574a48b.jpg?compress=1&resize=1600x1200&vertical=top',
  short_desc: 'MSN inspired web application allowing users to create individual chatrooms.',
  long_desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam malesuada eros at dolor faucibus blandit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus porta, eros quis ultrices viverra, nibh magna dapibus lorem, et faucibus orci augue vitae nisl. Aenean tempus ex neque, sed tempor lacus maximus sit amet. Cras vitae magna nec massa tempor luctus. Mauris lacinia eros non felis sagittis, ut tempor ante mollis. Aenean eu tincidunt massa.',
  tech: ['React', 'HTML', 'CSS', 'Firebase']
},
{
  id: '03',
  title: 'Messenger',
  icon: 'https://cdn.sanity.io/images/lcrnwy6l/production/37974644667e33bbeda32d58d7ace85e7fd52743-67x67.svg?w=130',
  image: 'https://cdn.dribbble.com/users/1281594/screenshots/14340699/media/7675a2215bd4960c065cbc66c574a48b.jpg?compress=1&resize=1600x1200&vertical=top',
  short_desc: 'MSN inspired web application allowing users to create individual chatrooms.',
  long_desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam malesuada eros at dolor faucibus blandit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus porta, eros quis ultrices viverra, nibh magna dapibus lorem, et faucibus orci augue vitae nisl. Aenean tempus ex neque, sed tempor lacus maximus sit amet. Cras vitae magna nec massa tempor luctus. Mauris lacinia eros non felis sagittis, ut tempor ante mollis. Aenean eu tincidunt massa.',
  tech: ['React', 'HTML', 'CSS', 'Firebase']
},
{
  id: '04',
  title: 'Main Event',
  icon: 'https://cdn.sanity.io/images/lcrnwy6l/production/37974644667e33bbeda32d58d7ace85e7fd52743-67x67.svg?w=130',
  image: 'https://cdn.dribbble.com/users/1281594/screenshots/14340699/media/7675a2215bd4960c065cbc66c574a48b.jpg?compress=1&resize=1600x1200&vertical=top',
  short_desc: 'MSN inspired web application allowing users to create individual chatrooms.',
  long_desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam malesuada eros at dolor faucibus blandit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus porta, eros quis ultrices viverra, nibh magna dapibus lorem, et faucibus orci augue vitae nisl. Aenean tempus ex neque, sed tempor lacus maximus sit amet. Cras vitae magna nec massa tempor luctus. Mauris lacinia eros non felis sagittis, ut tempor ante mollis. Aenean eu tincidunt massa.',
  tech: ['React', 'HTML', 'CSS', 'Firebase']
}
]

export default function ProjectList() {

  return (
    <div className={classes['project-list']}>
      {project_data.map((project, index) => {
        return <Project
        index={index}
          key={project.id}
          title={project.title}
          icon={project.icon}
          image={project.image}
          shortDesc={project.short_desc}
          longDesc={project.long_desc}
          tech={project.tech}
           />
      })}
    </div>
  )
}

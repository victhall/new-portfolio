import Project from './Project';
import classes from './ProjectList.module.css';

const project_data = [{
  id: '01',
  title: 'Messenger',
  image: 'https://cdn.sanity.io/images/lcrnwy6l/production/37974644667e33bbeda32d58d7ace85e7fd52743-67x67.svg?w=130',
  short_desc: '2000s MSN Messenger inspired web application allowing users to create individual chatrooms.',
  long_desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam malesuada eros at dolor faucibus blandit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus porta, eros quis ultrices viverra, nibh magna dapibus lorem, et faucibus orci augue vitae nisl. Aenean tempus ex neque, sed tempor lacus maximus sit amet. Cras vitae magna nec massa tempor luctus. Mauris lacinia eros non felis sagittis, ut tempor ante mollis. Aenean eu tincidunt massa.',
  tech: 'React, HTML, CSS, Firebase'
},
{
  id: '02',
  title: 'Main Event',
  image: 'https://cdn.sanity.io/images/lcrnwy6l/production/37974644667e33bbeda32d58d7ace85e7fd52743-67x67.svg?w=130',
  short_desc: '2000s MSN Messenger inspired web application allowing users to create individual chatrooms.',
  long_desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam malesuada eros at dolor faucibus blandit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus porta, eros quis ultrices viverra, nibh magna dapibus lorem, et faucibus orci augue vitae nisl. Aenean tempus ex neque, sed tempor lacus maximus sit amet. Cras vitae magna nec massa tempor luctus. Mauris lacinia eros non felis sagittis, ut tempor ante mollis. Aenean eu tincidunt massa.',
  tech: 'React, HTML, CSS, Firebase'
},
{
  id: '03',
  title: 'Messenger',
  image: 'https://cdn.sanity.io/images/lcrnwy6l/production/37974644667e33bbeda32d58d7ace85e7fd52743-67x67.svg?w=130',
  short_desc: '2000s MSN Messenger inspired web application allowing users to create individual chatrooms.',
  long_desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam malesuada eros at dolor faucibus blandit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus porta, eros quis ultrices viverra, nibh magna dapibus lorem, et faucibus orci augue vitae nisl. Aenean tempus ex neque, sed tempor lacus maximus sit amet. Cras vitae magna nec massa tempor luctus. Mauris lacinia eros non felis sagittis, ut tempor ante mollis. Aenean eu tincidunt massa.',
  tech: 'React, HTML, CSS, Firebase'
},
{
  id: '04',
  title: 'Main Event',
  image: 'https://cdn.sanity.io/images/lcrnwy6l/production/37974644667e33bbeda32d58d7ace85e7fd52743-67x67.svg?w=130',
  short_desc: '2000s MSN Messenger inspired web application allowing users to create individual chatrooms.',
  long_desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam malesuada eros at dolor faucibus blandit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus porta, eros quis ultrices viverra, nibh magna dapibus lorem, et faucibus orci augue vitae nisl. Aenean tempus ex neque, sed tempor lacus maximus sit amet. Cras vitae magna nec massa tempor luctus. Mauris lacinia eros non felis sagittis, ut tempor ante mollis. Aenean eu tincidunt massa.',
  tech: 'React, HTML, CSS, Firebase'
}
]

export default function ProjectList() {

  return (
    <div className={classes['project-list']}>
      {project_data.map((project) => {
        return <Project
          key={project.id}
          title={project.title}
          image={project.image}
          shortDesc={project.short_desc}
          longDesc={project.long_desc}
          tech={project.tech}
           />
      })}
    </div>
  )
}

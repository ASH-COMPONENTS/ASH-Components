import Landing from './home/page';
import mainStyles from './page.module.css'
import TracksBoxses from './tracksBoxes/page';

export const metadata = {
  title: 'Home',
  description: 'all information from the cources is here',
}

function Home() {
  return (
    <div className={mainStyles.siteContent}>
      <div className='container'>
        <Landing />
        <TracksBoxses />
      </div>
    </div>
  )
}

export default Home;
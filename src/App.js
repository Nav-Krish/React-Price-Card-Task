import logo from './logo.svg';
import './App.css';
import Card from './Card'

var free = {
  title: "FREE",
  price: "0",
  user: "Single User",
  userState: true,
  storage: "50GB Storage",
  storageState: true,
  publicProjects: "Unlimited Public Projects",
  publicProjectsState: true,
  communityAccess: "Community Access",
  communityAccessState: true,
  privateProjects: "Unlimited Private Projects",
  privateProjectsState: false,
  phoneSupport: "Dedicated Phone Support",
  phoneSupportState: false,
  subdomain: "Free Subdomain",
  subdomainState: false,
  statusReports: "Monthly Status Reports",
  statusReportsState: false
}

var plus = {
  title: "PLUS",
  price: "9",
  user: "5 Users",
  userState: true,
  storage: "50GB Storage",
  storageState: true,
  publicProjects: "Unlimited Public Projects",
  publicProjectsState: true,
  communityAccess: "Community Access",
  communityAccessState: true,
  privateProjects: "Unlimited Private Projects",
  privateProjectsState: true,
  phoneSupport: "Dedicated Phone Support",
  phoneSupportState: true,
  subdomain: "Free Subdomain",
  subdomainState: true,
  statusReports: "Monthly Status Reports",
  statusReportsState: false
}

var pro = {
  title: "PRO",
  price: "49",
  user: "Unlimited Users",
  userState: true,
  storage: "50GB Storage",
  storageState: true,
  publicProjects: "Unlimited Public Projects",
  publicProjectsState: true,
  communityAccess: "Community Access",
  communityAccessState: true,
  privateProjects: "Unlimited Private Projects",
  privateProjectsState: true,
  phoneSupport: "Dedicated Phone Support",
  phoneSupportState: true,
  subdomain: "Free Subdomain",
  subdomainState: true,
  statusReports: "Monthly Status Reports",
  statusReportsState: true
}

function App() {
  return <>
    <div className='priceCard'>
      <div className='pricing py-5'>
      <div className="container">
        <div className="row">
          <Card plan={free} />
          <Card plan={plus} />
          <Card plan={pro} />
        </div>
      </div>
      </div>
    </div>
  </>

}

export default App;

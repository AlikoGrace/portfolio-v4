import './App.css';


function App() {
  return (
    <setion class={'body'}>
        <nav className="navbar navbar-expand-lg navbar-light bg-theme justify-content-between">
            <a className="navbar-brand" href="#">
                Logo            </a>
            <div className={'d-flex'}>
                <ol className={'d-flex navbar-nav nav-ol'}>
                    <li className={'mx-3'}><a  href="/#about">About</a></li>
                    <li className={'mx-3'}><a  href="/#jobs">Experience</a></li>
                    <li className={'mx-3'}><a  href="/#projects">Work</a></li>
                    <li className={'mx-3'}><a  href="/#contact">Contact</a></li>
                </ol>
                <div ><a className="resume-button" href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
                </div>
            </div>
        </nav>
        <main className={''}>

        </main>
    </setion>
  );
}

export default App;

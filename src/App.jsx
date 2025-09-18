import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';

// Layouts
import DefaultLayout from './layouts/DefaultLayout';
import GeneralLayout from './layouts/GeneralLayout';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import AboutSrc from './pages/AboutSrc';
import Advisory from './pages/Advisory';
import Team from './pages/Team';
import Capabilities from './pages/Capabilities';
import Research from './pages/capabilities/Research';
import ConsultingAdvisory from './pages/capabilities/ConsultingAdvisory';
import Esg from './pages/capabilities/Esg';
import IntellectualSupport from './pages/capabilities/IntellectualSupport';
import MediaAdvocacy from './pages/capabilities/MediaAdvocacy';
import DigitalDocumentation from './pages/capabilities/DigitalDocumentation';
import Documentry from './pages/capabilities/Documentry';
import CsrProjects from './pages/csr/Projects';
import Ventures from './pages/ventures/Index';
import VentureDetail from './pages/ventures/VentureDetail';
import Events from './pages/events/Index';
import EventDetail from './pages/events/EventDetail';
import Campaigns from './pages/events/Campaigns';
import Members from './pages/members/Index';
import Internship from './pages/membership/Internship';
import Voluntary from './pages/membership/Voluntary';
import Pledge from './pages/pledge/Index';
import PledgeDetail from './pages/pledge/PledgeDetail';
import Founder from './pages/founder/Index';
import Supporters from './pages/Supporters';
import Tenders from './pages/Tenders';
import ConceptNote from './pages/ConceptNote';
import Demo from './pages/Demo';
import SeeSummit2021 from './pages/SeeSummit2021';
import SeeSummit2022 from './pages/SeeSummit2022';
import Registration from './pages/Registration';
import Success from './pages/Success';
import NotFound from './pages/NotFound';

// Store
import { store } from './store';

// Create a QueryClient instance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      cacheTime: 1000 * 60 * 10, // 10 minutes
    },
  },
});

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <div className="App">
            <Routes>
              {/* Routes with Default Layout */}
              <Route element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/about/src" element={<AboutSrc />} />
                <Route path="/advisory" element={<Advisory />} />
                <Route path="/team" element={<Team />} />
                <Route path="/capabilities" element={<Capabilities />} />
                <Route path="/capabilities/research" element={<Research />} />
                <Route path="/capabilities/consulting_and_advisory" element={<ConsultingAdvisory />} />
                <Route path="/capabilities/esg" element={<Esg />} />
                <Route path="/capabilities/intellectual_support" element={<IntellectualSupport />} />
                <Route path="/capabilities/media_advocacy" element={<MediaAdvocacy />} />
                <Route path="/capabilities/digital_documentation" element={<DigitalDocumentation />} />
                <Route path="/capabilities/documentry" element={<Documentry />} />
                <Route path="/csr/projects" element={<CsrProjects />} />
                <Route path="/ventures" element={<Ventures />} />
                <Route path="/ventures/:id" element={<VentureDetail />} />
                <Route path="/events" element={<Events />} />
                <Route path="/events/:id" element={<EventDetail />} />
                <Route path="/events/campaigns" element={<Campaigns />} />
                <Route path="/members" element={<Members />} />
                <Route path="/membership/internship" element={<Internship />} />
                <Route path="/membership/voluntary" element={<Voluntary />} />
                <Route path="/pledge" element={<Pledge />} />
                <Route path="/pledge/:id" element={<PledgeDetail />} />
                <Route path="/founder" element={<Founder />} />
                <Route path="/supporters" element={<Supporters />} />
                <Route path="/tenders" element={<Tenders />} />
                <Route path="/concept-note" element={<ConceptNote />} />
                <Route path="/demo" element={<Demo />} />
                <Route path="/SeeSummit2021" element={<SeeSummit2021 />} />
                <Route path="/SeeSummit2022" element={<SeeSummit2022 />} />
                <Route path="/registration" element={<Registration />} />
                <Route path="/success" element={<Success />} />
                <Route path="/success/:id" element={<Success />} />
              </Route>

              {/* Routes with General Layout */}
              <Route element={<GeneralLayout />}>
                {/* Add routes that need different layout here if any */}
              </Route>

              {/* 404 Route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
            
            {/* Global Toast Notifications */}
            <Toaster
              position="top-right"
              toastOptions={{
                duration: 4000,
                style: {
                  background: '#363636',
                  color: '#fff',
                },
              }}
            />
          </div>
        </Router>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
import { ClerkProvider, RedirectToSignIn, SignedIn, SignedOut, SignIn, SignUp } from '@clerk/clerk-react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { LoadingProvider } from './components/LoadingProvider';
import { ScrollToTop } from './components/ScrollToTop';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { DomainDetail } from './pages/DomainDetail';
import { Home } from './pages/Home';
import { KnowYourself } from './pages/KnowYourself';
import { Privacy } from './pages/Privacy';
import { Profile } from './pages/Profile';
import { Terms } from './pages/Terms';
import { Test } from './pages/Test';
import { ToBuild } from './pages/ToBuild';
import { View } from './pages/View';

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!clerkPubKey) {
  throw new Error('Missing Clerk Publishable Key');
}

function App() {
  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <Router>
        <ScrollToTop />
        <LoadingProvider>
          <div className="App">
            <Routes>
              {/* Public routes */}
              <Route path="/" element={<View />} /> {/* Landing page */}
              <Route path="/sign-in/*" element={<SignIn routing="path" path="/sign-in" />} />
              <Route path="/sign-up/*" element={<SignUp routing="path" path="/sign-up" />} />
              <Route path="/privacy" element={<Layout><Privacy /></Layout>} />
              <Route path="/terms" element={<Layout><Terms /></Layout>} />

              {/* Protected routes */}
              <Route path="/home" element={
                <>
                  <SignedIn>
                    <Layout><Home /></Layout>
                  </SignedIn>
                  <SignedOut>
                    <RedirectToSignIn />
                  </SignedOut>
                </>
              } />

              <Route path="/domain/:id" element={
                <>
                  <SignedIn>
                    <Layout><DomainDetail /></Layout>
                  </SignedIn>
                  <SignedOut>
                    <RedirectToSignIn />
                  </SignedOut>
                </>
              } />

              <Route path="/know-yourself" element={
                <>
                  <SignedIn>
                    <Layout><KnowYourself /></Layout>
                  </SignedIn>
                  <SignedOut>
                    <RedirectToSignIn />
                  </SignedOut>
                </>
              } />

              <Route path="/test/:domainId/:difficulty?" element={
                <>
                  <SignedIn>
                    <Layout><Test /></Layout>
                  </SignedIn>
                  <SignedOut>
                    <RedirectToSignIn />
                  </SignedOut>
                </>
              } />

              <Route path="/ToBuild" element={
                <>
                  <SignedIn>
                    <Layout><ToBuild /></Layout>
                  </SignedIn>
                  <SignedOut>
                    <RedirectToSignIn />
                  </SignedOut>
                </>
              } />

              <Route path="/to-build/:id" element={
                <>
                  <SignedIn>
                    <Layout>
                      <ToBuild />
                    </Layout>
                  </SignedIn>
                  <SignedOut>
                    <RedirectToSignIn />
                  </SignedOut>
                </>
              } />

              <Route path="/about" element={
                <>
                  <SignedIn>
                    <Layout><About /></Layout>
                  </SignedIn>
                  <SignedOut>
                    <RedirectToSignIn />
                  </SignedOut>
                </>
              } />

              <Route path="/contact" element={
                <>
                  <SignedIn>
                    <Layout><Contact /></Layout>
                  </SignedIn>
                  <SignedOut>
                    <RedirectToSignIn />
                  </SignedOut>
                </>
              } />

              <Route path="/profile" element={
                <>
                  <SignedIn>
                    <Layout><Profile /></Layout>
                  </SignedIn>
                  <SignedOut>
                    <RedirectToSignIn />
                  </SignedOut>
                </>
              } />
            </Routes>
          </div>
        </LoadingProvider>
      </Router>
    </ClerkProvider>
  );
}

export default App;

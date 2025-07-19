import { ClerkLoaded, ClerkLoading, ClerkProvider, RedirectToSignIn, SignedIn, SignedOut } from '@clerk/clerk-react';
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
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';
import { Terms } from './pages/Terms';
import { Test } from './pages/Test';
import { ToBuild } from './pages/ToBuild';
import { View } from './pages/View';

function App() {
  const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

  if (!clerkPubKey) {
    console.error('Missing Clerk Publishable Key');
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0A1933] via-[#0f2447] to-[#1a365d]">
        <div className="text-white text-center">
          <p>Authentication configuration error. Please try again later.</p>
        </div>
      </div>
    );
  }

  return (
    <ClerkProvider
      publishableKey={clerkPubKey}
    >
      <ClerkLoading>
        <div className="min-h-screen flex items-center justify-center">
          <div className="w-16 h-16 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
        </div>
      </ClerkLoading>
      <ClerkLoaded>
        <Router>
          <ScrollToTop />
          <LoadingProvider>
            <div className="App">
              <Routes>
                {/* Public routes */}
                <Route path="/" element={<View />} /> {/* Landing page */}
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/sign-up" element={<SignUp />} />
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
      </ClerkLoaded>
    </ClerkProvider>
  );
}

export default App;

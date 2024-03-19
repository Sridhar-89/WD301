// import React from 'react'
// import ReactDOM from 'react-dom'
// import App from './App.tsx'
// import './index.css'
// import { ThemeProvider} from "./context/theme";

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <ThemeProvider>
//     <App />
//   </ThemeProvider>,
// )
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "./context/theme";
//...
import * as Sentry from "@sentry/react";


Sentry.init({
  dsn: "https://d7ef6321f38aa558a1960c81f28463b9@o4506936346279936.ingest.us.sentry.io/4506936347787264",
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration({
      maskAllText: false,
      blockAllMedia: false,
    }),
  ],
  // Performance Monitoring
  tracesSampleRate: 1.0, //  Capture 100% of the transactions
  // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});

// const container = document.getElementById(“app”);
// const root = createRoot(container);
// root.render(<App />);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

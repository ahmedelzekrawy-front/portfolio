// Vercel Speed Insights initialization
// This script loads and initializes Speed Insights for a vanilla JavaScript project

// Import the injectSpeedInsights function from the installed package via CDN
import { injectSpeedInsights } from 'https://cdn.jsdelivr.net/npm/@vercel/speed-insights@2/+esm';

// Initialize Speed Insights with configuration
injectSpeedInsights({
  // Set to true to enable debug logging during development
  debug: false,
  
  // Sample rate: 1 = 100% of events (adjust to reduce costs if needed)
  // For example, 0.5 would send 50% of events
  sampleRate: 1,
  
  // Optional: beforeSend middleware to filter or modify events
  // beforeSend: (event) => {
  //   // You can modify the event or return null to cancel it
  //   return event;
  // }
});

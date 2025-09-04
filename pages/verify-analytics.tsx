import { Layout } from "@/components/layout/Layout";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, XCircle, AlertCircle } from "lucide-react";

export default function VerifyAnalytics() {
  const [analyticsLoaded, setAnalyticsLoaded] = useState<boolean | null>(null);
  const [events, setEvents] = useState<Array<{ time: string; name: string; params: any }>>([]);

  useEffect(() => {
    // Check if gtag is loaded
    const checkAnalytics = () => {
      if (typeof window !== 'undefined' && (window as any).gtag) {
        setAnalyticsLoaded(true);
        // Send verification event
        (window as any).gtag('event', 'verify_analytics_load', {
          verification_time: new Date().toISOString()
        });
      } else {
        setAnalyticsLoaded(false);
      }
    };

    // Check immediately and after a delay
    checkAnalytics();
    setTimeout(checkAnalytics, 2000);
  }, []);

  const logEvent = (eventName: string, parameters: any) => {
    const newEvent = {
      time: new Date().toLocaleTimeString(),
      name: eventName,
      params: parameters
    };
    setEvents(prev => [newEvent, ...prev].slice(0, 10)); // Keep last 10 events
  };

  const testPageView = () => {
    if ((window as any).gtag) {
      (window as any).gtag('event', 'page_view', {
        page_title: 'Analytics Test Page',
        page_location: window.location.href,
        page_path: '/verify-analytics'
      });
      logEvent('page_view', { page_title: 'Analytics Test Page' });
      alert('Page view event sent! Check Realtime reports in GA.');
    }
  };

  const testDownload = () => {
    if ((window as any).gtag) {
      (window as any).gtag('event', 'file_download', {
        file_name: 'test_file.exe',
        file_extension: 'exe',
        link_text: 'Test Download',
        link_url: '/downloads/test_file.exe'
      });
      logEvent('file_download', { file_name: 'test_file.exe' });
      alert('Download event sent! This will appear in Engagement > Events.');
    }
  };

  const testFormSubmit = () => {
    if ((window as any).gtag) {
      (window as any).gtag('event', 'form_submit', {
        form_name: 'Test Contact Form',
        form_destination: '/contact',
        form_submit_text: 'Submit'
      });
      logEvent('form_submit', { form_name: 'Test Contact Form' });
      alert('Form submit event sent!');
    }
  };

  const testCustomEvent = () => {
    if ((window as any).gtag) {
      (window as any).gtag('event', 'test_custom_event', {
        custom_parameter: 'test_value',
        timestamp: new Date().toISOString()
      });
      logEvent('test_custom_event', { custom_parameter: 'test_value' });
      alert('Custom event sent!');
    }
  };

  return (
    <Layout>
      <main className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Google Analytics Verification</h1>
          
          {/* Analytics Status */}
          <Card className="mb-8 bg-slate-900/50 border-slate-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                Analytics Status
                {analyticsLoaded === true && <CheckCircle className="text-green-500 w-6 h-6" />}
                {analyticsLoaded === false && <XCircle className="text-red-500 w-6 h-6" />}
                {analyticsLoaded === null && <AlertCircle className="text-yellow-500 w-6 h-6" />}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {analyticsLoaded === true && (
                <>
                  <p className="text-green-400 mb-2">✓ Google Analytics is properly loaded and configured!</p>
                  <p className="text-sm text-slate-400">Measurement ID: G-RBE2XPP5VZ</p>
                </>
              )}
              {analyticsLoaded === false && (
                <p className="text-red-400">✗ Google Analytics is not loading properly.</p>
              )}
              {analyticsLoaded === null && (
                <p className="text-yellow-400">Checking Google Analytics connection...</p>
              )}
            </CardContent>
          </Card>

          {/* Test Events */}
          <Card className="mb-8 bg-slate-900/50 border-slate-800">
            <CardHeader>
              <CardTitle>Test Events</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Click these buttons to send test events to Google Analytics:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button onClick={testPageView} className="bg-amber-500 hover:bg-amber-600 text-black">
                  Test Page View
                </Button>
                <Button onClick={testDownload} className="bg-amber-500 hover:bg-amber-600 text-black">
                  Test Download Event
                </Button>
                <Button onClick={testFormSubmit} className="bg-amber-500 hover:bg-amber-600 text-black">
                  Test Form Submit
                </Button>
                <Button onClick={testCustomEvent} className="bg-amber-500 hover:bg-amber-600 text-black">
                  Test Custom Event
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* How to Verify */}
          <Card className="mb-8 bg-slate-900/50 border-slate-800">
            <CardHeader>
              <CardTitle>How to Verify in Google Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside space-y-2">
                <li>Go to <a href="https://analytics.google.com" target="_blank" rel="noopener noreferrer" className="text-amber-500 underline">Google Analytics</a></li>
                <li>Select "BIM Ops Studio" property</li>
                <li>Go to <strong>Reports → Realtime</strong></li>
                <li>You should see:
                  <ul className="list-disc list-inside ml-6 mt-2">
                    <li>Active users (should show at least 1 - you!)</li>
                    <li>Events firing when you click test buttons</li>
                    <li>Page views being tracked</li>
                  </ul>
                </li>
                <li>For download tracking, go to <strong>Reports → Engagement → Events</strong></li>
              </ol>
            </CardContent>
          </Card>

          {/* Analytics Details */}
          <Card className="mb-8 bg-slate-900/50 border-slate-800">
            <CardHeader>
              <CardTitle>Analytics Details</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li><strong>Account Name:</strong> BIM Ops Studio</li>
                <li><strong>Account ID:</strong> 367208945</li>
                <li><strong>Measurement ID:</strong> G-RBE2XPP5VZ</li>
                <li><strong>Property:</strong> bimopsstudio.com</li>
              </ul>
            </CardContent>
          </Card>

          {/* Event Log */}
          <Card className="bg-slate-900/50 border-slate-800">
            <CardHeader>
              <CardTitle>Event Log</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-400 mb-4">Events sent to Google Analytics will appear here:</p>
              {events.length === 0 ? (
                <p className="text-slate-500">No events sent yet. Click the test buttons above!</p>
              ) : (
                <div className="space-y-2">
                  {events.map((event, index) => (
                    <div key={index} className="p-3 bg-slate-800 rounded">
                      <strong className="text-amber-500">{event.time}</strong> - 
                      <strong className="ml-2">{event.name}</strong>: {JSON.stringify(event.params)}
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
    </Layout>
  );
}
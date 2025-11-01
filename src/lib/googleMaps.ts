// Google Maps JS API loader with lazy loading and single-instance guard
// Usage: await loadGoogleMapsApi(); // returns window.google
// Reads API key from import.meta.env.VITE_GOOGLE_MAPS_API_KEY

let mapsApiPromise: Promise<typeof google> | null = null;

export function loadGoogleMapsApi(): Promise<typeof google> {
  if (mapsApiPromise) return mapsApiPromise;

  mapsApiPromise = new Promise((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(
      'script[data-google-maps-api]'
    );
    if (existing && (window as any).google && (window as any).google.maps) {
      resolve((window as any).google);
      return;
    }

    const apiKey = (import.meta as any).env?.VITE_GOOGLE_MAPS_API_KEY;
    if (!apiKey) {
      reject(new Error('Missing VITE_GOOGLE_MAPS_API_KEY in environment.'));
      return;
    }

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=weekly&libraries=places`;
    script.async = true;
    script.defer = true;
    script.setAttribute('data-google-maps-api', 'true');

    script.onload = () => {
      if ((window as any).google && (window as any).google.maps) {
        resolve((window as any).google);
      } else {
        reject(new Error('Google Maps API loaded but window.google.maps missing'));
      }
    };
    script.onerror = () => reject(new Error('Failed to load Google Maps JS API'));

    document.head.appendChild(script);
  });

  return mapsApiPromise;
}

// Observe element visibility to defer heavy work (e.g., map init)
export function whenInViewport(el: HTMLElement, callback: () => void) {
  const io = new IntersectionObserver(
    (entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        callback();
        io.disconnect();
      }
    },
    { root: null, threshold: 0.15 }
  );
  io.observe(el);
}
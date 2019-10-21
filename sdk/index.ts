import venues from './venue-search.json';

export function getVenues() {
  return new Promise<any>((resolve) => {
    setTimeout(() => {
      resolve(venues);
    }, 2500);
  });
}

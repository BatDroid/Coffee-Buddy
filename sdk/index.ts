import venues from './venue-search.json';

export function getVenues() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(venues);
    }, 2500);
  });
}

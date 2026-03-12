import { Page } from './types';

export const navigationState = $state({ page: Page.Home });

function pageToPath(page: Page): string {
  if (page === Page.Home) return '/';
  if (page === Page.Blog) return '/blog';
  if (page === Page.Personal) return '/personal';
  if (page === Page.Academic) return '/academic';
  if (page === Page.Projects) return '/projects';
  return '/';
}

function pathToPage(pathname: string): Page {
  if (pathname === '/') return Page.Home;
  if (pathname === '/blog') return Page.Blog;
  if (pathname === '/personal') return Page.Personal;
  if (pathname === '/academic') return Page.Academic;
  if (pathname === '/projects') return Page.Projects;
  return Page.Home;
}

export function navigate(page: Page) {
  navigationState.page = page;
  const path = pageToPath(page);
  history.pushState({ page }, '', path);
}

export function initNavigation() {
  const sync = () => {
    navigationState.page = pathToPage(window.location.pathname);
  };

  sync();
  window.onpopstate = sync;
}

import { Page } from './types';

export const navigationState = $state({ page: Page.Intro });

export function navigate(page: Page) {
  navigationState.page = page;
  const url = new URL(window.location.href);
  if (page === Page.Home) url.searchParams.set('page', 'home');
  else if (page === Page.Blog) url.searchParams.set('page', 'blog');
  else if (page === Page.Personal) url.searchParams.set('page', 'personal');
  else if (page === Page.Academic) url.searchParams.set('page', 'academic');
  else if (page === Page.Projects) url.searchParams.set('page', 'projects');
  else url.searchParams.delete('page');
  history.pushState({}, '', url);
}

export function initNavigation() {
  const sync = () => {
    const p = new URLSearchParams(window.location.search).get('page');
    if (p === 'home') navigationState.page = Page.Home;
    else if (p === 'blog') navigationState.page = Page.Blog;
    else if (p === 'personal') navigationState.page = Page.Personal;
    else if (p === 'academic') navigationState.page = Page.Academic;
    else if (p === 'projects') navigationState.page = Page.Projects;
    else navigationState.page = Page.Intro;
  };
  sync();
  window.onpopstate = sync;
}

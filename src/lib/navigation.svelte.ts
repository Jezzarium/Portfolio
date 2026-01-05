import { Page } from "./types";

export const navigationState = $state({ page: Page.Intro });

export function navigate(page: Page) {
    navigationState.page = page;
    const url = new URL(window.location.href);
    if (page === Page.Home) url.searchParams.set("page", "home");
    else if (page === Page.Blog) url.searchParams.set("page", "blog");
    else url.searchParams.delete("page");
    history.pushState({}, "", url);
}

export function initNavigation() {
    const sync = () => {
        const p = new URLSearchParams(window.location.search).get("page");
        if (p === "home") navigationState.page = Page.Home;
        else if (p === "blog") navigationState.page = Page.Blog;
        else navigationState.page = Page.Intro;
    };
    sync();
    window.onpopstate = sync;
}

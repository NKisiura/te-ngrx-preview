import { Store } from "@ngrx/store";
import { first } from "rxjs";
import { AppInitActions, selectAppCoreDataLoaded } from "./app.state";

export function initializeApp(store: Store) {
  return () => {
    store.dispatch(AppInitActions.appCoreDataRequested());

    return store.select(selectAppCoreDataLoaded).pipe(first(Boolean));
  };
}

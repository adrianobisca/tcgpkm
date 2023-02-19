import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { setLoadingHide, setLoadingShow } from '@shared/actions/loading.actions';

interface LoadingStateModel {
    status: boolean
}

@State<LoadingStateModel>({
    name: 'loading',
    defaults: {
        status: false
    }
})

@Injectable()
export class LoadingState {
    @Selector()
    static getStatus(state: LoadingStateModel) {
      return state.status;
    }

    constructor() { }

    @Action(setLoadingShow)
    setLoadingShow({ patchState }: StateContext<LoadingStateModel>) {
        return patchState({ status: true });
    }
    
    @Action(setLoadingHide)
    setLoadingHide({ patchState }: StateContext<LoadingStateModel>) {
        return patchState({ status: false });
    }

}
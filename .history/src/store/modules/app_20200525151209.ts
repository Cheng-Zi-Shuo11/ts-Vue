/** @format */

import {} from 'vuex-module-decorators';
import store from '@/store';

export interface IAppState {
  app: string;
}

@Module({ dynamic: true, store, name: "app"})

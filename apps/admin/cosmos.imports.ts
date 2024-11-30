// This file is automatically generated by Cosmos. Add it to .gitignore and
// only edit if you know what you're doing.

import { RendererConfig, UserModuleWrappers } from 'react-cosmos-core';

import * as fixture0 from './src/cosmos/Hello.fixture';
import * as fixture1 from './src/cosmos/App.fixture';

export const rendererConfig: RendererConfig = {
  "playgroundUrl": "http://localhost:5001",
  "rendererUrl": "http://localhost:5050"
};

const fixtures = {
  'src/cosmos/Hello.fixture.tsx': { module: fixture0 },
  'src/cosmos/App.fixture.tsx': { module: fixture1 }
};

const decorators = {};

export const moduleWrappers: UserModuleWrappers = {
  lazy: false,
  fixtures,
  decorators
};

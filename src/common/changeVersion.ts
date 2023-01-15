import { StateSetter, Version } from '../types/types';

export const changeVersion = (
  version: Version,
  setters: {
    setVersion: StateSetter<Version>;
    setShowVersions: StateSetter<boolean>;
  }
) => {
  setters.setVersion(version);
  setters.setShowVersions(false);
};

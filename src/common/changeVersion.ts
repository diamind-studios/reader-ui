import { StateSetter } from '../types/types';

export const changeVersion = (
  version: string,
  setters: {
    setVersion: StateSetter<string>;
    setShowVersions: StateSetter<boolean>;
    setReaderText: StateSetter<string>;
  }
) => {
  setters.setVersion(version);
  setters.setReaderText('N/A');
  setters.setShowVersions(false);
};

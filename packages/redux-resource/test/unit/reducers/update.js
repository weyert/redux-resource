import { resourceReducer } from '../../../src';
import { resetCodeCache } from '../../../src/utils/warning';

describe('reducers: update', function() {
  beforeEach(() => {
    resetCodeCache();
  });

  // Intentionally mostly-empty. Refer to the read reducer tests and the
  // reducer-generator tests

  describe('UPDATE_RESOURCES_SUCCEEDED:', () => {
    it('returns the right state without a request name, without IDs', () => {
      stub(console, 'error');
      const initialState = {
        resources: {
          1: { id: 1 },
          3: { id: 3 },
          4: { id: 4 },
        },
        lists: {},
        requests: {
          pasta: {
            hungry: true,
          },
        },
        meta: {
          1: {
            name: 'what',
          },
          3: {
            deleteStatus: 'sandwiches',
          },
        },
      };

      const reducer = resourceReducer('hellos', { initialState });

      const reduced = reducer(undefined, {
        type: 'UPDATE_RESOURCES_SUCCEEDED',
        resourceType: 'hellos',
      });

      expect(reduced).to.deep.equal({
        ...initialState,
        resourceType: 'hellos',
      });
      expect(console.error.callCount).to.equal(1);
    });

    it('(deprecated) returns the right state without a request name, without IDs (resourceName)', () => {
      stub(console, 'error');
      const initialState = {
        resources: {
          1: { id: 1 },
          3: { id: 3 },
          4: { id: 4 },
        },
        lists: {},
        requests: {
          pasta: {
            hungry: true,
          },
        },
        meta: {
          1: {
            name: 'what',
          },
          3: {
            deleteStatus: 'sandwiches',
          },
        },
      };

      const reducer = resourceReducer('hellos', { initialState });

      const reduced = reducer(undefined, {
        type: 'UPDATE_RESOURCES_SUCCEEDED',
        resourceName: 'hellos',
      });

      expect(reduced).to.deep.equal({
        ...initialState,
        resourceType: 'hellos',
      });
      expect(console.error.callCount).to.equal(2);
    });
  });
});

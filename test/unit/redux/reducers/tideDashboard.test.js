/* global chai */
/* global sinon */
/* global describe */
/* global it */
/* global expect */

import _ from 'lodash';

import { tideDashboard as reducer } from '../../../../app/redux/reducers/misc';
import * as actions from '../../../../app/redux/actions/index';

var expect = chai.expect;

describe('tideDashboard', () => {
  describe('fetchTideDashboardPatientsSuccess', () => {
    it('should set state to patients', () => {
      let initialStateForTest = null;
      const patients = [{ 'foo': 'bar' }];

      let action = actions.sync.fetchTideDashboardPatientsSuccess(patients);

      let state = reducer(initialStateForTest, action);

      expect(state).to.eql(patients);
    });
  });

  describe('logoutRequest', () => {
    it('should set state to null', () => {
      const patients = [{ 'foo': 'bar' }];
      let initialStateForTest = patients;

      let action = actions.sync.logoutRequest();

      let state = reducer(initialStateForTest, action);

      expect(state).to.be.null;
    });
  });
});

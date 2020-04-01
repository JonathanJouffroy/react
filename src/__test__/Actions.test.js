import configureMockStore from 'redux-mock-store'
import * as fromActions from '../actions'

// Create a mock store
const mockStore = configureMockStore()
const store = mockStore({})

describe('action creators', () => {
  it('creates ADD_X when add was successful', () => {
    store.dispatch(fromActions.addX(10));
    expect(store.getActions()).toMatchSnapshot();
  });
  it('creates ADD_ONE when add was successful', () => {
    store.dispatch(fromActions.addOne());
    expect(store.getActions()).toMatchSnapshot();
  });
  it('show ALL_USERS ', () => {
    store.dispatch(fromActions.allUsers());
    expect(store.getActions()).toMatchSnapshot();
  });
  it('show GET_USERS_SAGA ', () => {
    store.dispatch(fromActions.getUsersSaga());
    expect(store.getActions()).toMatchSnapshot();
  });
  it('show GET_ORDERS_SAGA ', () => {
    store.dispatch(fromActions.getOrdersSaga());
    expect(store.getActions()).toMatchSnapshot();
  });
  it('show ALL_PRODUCTS ', () => {
    store.dispatch(fromActions.allProducts());
    expect(store.getActions()).toMatchSnapshot();
  });
  it('show GET_PRODUCTS_SAGA  ', () => {
    store.dispatch(fromActions.getProductsSaga());
    expect(store.getActions()).toMatchSnapshot();
  });

});
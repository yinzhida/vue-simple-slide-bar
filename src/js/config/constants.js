import cloneDeep from 'lodash.clonedeep';
import merge from 'lodash.merge';
import getClassSingleton from '@/js/utils/single';

let defaultOptions = {
};

class Constants {
  constructor () {
    this.constants = cloneDeep(defaultOptions);
  }

  get (name) {
    return this.constants[name];
  }

  merge (opts) {
    this.constants = merge(this.constants, opts);
  }
}

const SingleConstants = getClassSingleton(Constants);

export default SingleConstants;

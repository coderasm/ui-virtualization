'use strict';

exports.__esModule = true;
exports.configure = configure;

var _virtualRepeat = require('./virtual-repeat');

var _virtualList = require('./virtual-list');

function configure(aurelia) {
  aurelia.globalizeResources('./virtual-repeat', './virtual-list');
}

exports.VirtualRepeat = _virtualRepeat.VirtualRepeat;
exports.VirtualList = _virtualList.VirtualList;
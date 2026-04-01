const React = require('react');

const SvgMock = React.forwardRef((props, ref) =>
  React.createElement('View', { ...props, ref, testID: 'svg-mock' }),
);

SvgMock.displayName = 'SvgMock';

module.exports = SvgMock;
module.exports.default = SvgMock;

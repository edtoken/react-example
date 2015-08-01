require('babel/register')({
	stage: 0,
	plugins: ['typecheck']
});

global.__CLIENT__ = false;
global.__SERVER__ = true;
global.__DEVELOPMENT__ = process.env.NODE_ENV !== 'production';

require('./src/server');

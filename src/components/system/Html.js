import React, {Component, PropTypes} from 'react';

const cdn = '//cdnjs.cloudflare.com/ajax/libs/';

/**
 * Wrapper component containing HTML metadata and boilerplate tags.
 */

export default class Html extends Component {

	static propTypes = {
		webpackStats: PropTypes.object,
		component: PropTypes.object
	}

	render() {

		const {webpackStats, component} = this.props;
		const title = 'React example';

		return (
			<html lang="en-us">
			<head>
				<meta charSet="utf-8"/>
				<title>{title}</title>
				<link href={cdn + 'twitter-bootstrap/3.3.5/css/bootstrap.min.css'}
				      media="screen, projection" rel="stylesheet" type="text/css" />
				<link href={cdn + 'font-awesome/4.3.0/css/font-awesome.min.css'}
				      media="screen, projection" rel="stylesheet" type="text/css" />
				{webpackStats.css.files.map((css, i) =>
					<link href={css} key={i} media="screen, projection"
					      rel="stylesheet" type="text/css"/>)}
			</head>
			<body>
			<div id="content" dangerouslySetInnerHTML={{__html: React.renderToString(component)}}/>
			<script src={webpackStats.script[0]}/>
			</body>
			</html>
		);
	}
}

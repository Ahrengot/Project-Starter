import styles from './avatar.css';

export default React.createClass({
	getDefaultProps() {
		return {
			size: 110
		}
	},
	render() {
		let style = {
			width: this.props.size,
			height: this.props.size,
			backgroundImage: 'url(' + this.props.src + ')',
		};

		return <div className={ styles.avatar } style={ style } />;
	}
})
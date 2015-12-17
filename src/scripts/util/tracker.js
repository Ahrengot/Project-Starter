const tracker = {
	isTouch: !!('ontouchstart' in document.documentElement),
	isLargeScreen: !!(screen.width > 768)
};

export default tracker;

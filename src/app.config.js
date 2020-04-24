module.exports = (() => {
	if (window.env !== undefined) return window.env

	return process.env
})()

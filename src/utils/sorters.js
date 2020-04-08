function noteByDate(n1, n2) {
	if (n1.last_updated > n2.last_updated) return -1
	if (n1.last_updated < n2.last_updated) return 1

	return 0
}

export default {
	noteByDate
}

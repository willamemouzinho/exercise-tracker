const checkDate = (date: string) => {
	if (!date) {
		return new Date(Date.now())
	}
	const parts = date.split('-')
	const year = Number.parseInt(parts[0])
	const month = Number.parseInt(parts[1]) - 1
	const day = Number.parseInt(parts[2])

	const utcDate = new Date(Date.UTC(year, month, day))
	// console.log(new Date(utcDate.getTime() + utcDate.getTimezoneOffset() * 60000))
	// console.log(new Date(date))
	return new Date(utcDate.getTime() + utcDate.getTimezoneOffset() * 60000)
}

// let date = new Date().toDateString()
console.log(checkDate('').toDateString(), 'hoje')
// date = new Date('2024-12-01').toDateString()
console.log(checkDate('2024-12-01').toDateString(), '2024-12-01')

const passwordInput = document.getElementById('password')
const strengthIndicator =
document.getElementById('strengthIndicator')

passwordInput.addEventListener('input', (e) => {
    const password=e.target.value;
	const passwordLength = e.target.value.length
	strengthIndicator.textContent =
	getPasswordStrength(passwordLength)
    strengthIndicator.className = getStrengthClass(passwordLength)
})

function getPasswordStrength(passwordLength) {
	if (passwordLength < 4) return 'Very Weak'
	if (passwordLength < 8) return 'Weak'
	if (passwordLength < 12) return 'Medium'
	if (passwordLength < 16) return 'Strong'
	return 'Very Strong'
}

function getStrengthClass(passwordLength) {
	if (passwordLength < 4) return 'veryWeak'
	if (passwordLength < 8) return 'weak'
	if (passwordLength < 12) return 'medium'
	if (passwordLength < 16) return 'strong'
	return 'veryStrong'
}
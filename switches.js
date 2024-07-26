document.addEventListener('DOMContentLoaded', function() {
    const quality = document.getElementById('quality');
    const cheap = document.getElementById('cheap');
    const fast = document.getElementById('fast');

    function handleChange() {
        if (quality.checked && cheap.checked && fast.checked) {
            // Если все три включены, отключаем "Дешево"
            cheap.checked = false;
        }

        // Логика для переключателей
        if (quality.checked && cheap.checked) {
            fast.disabled = true; // Отключаем "Быстро"
        } else if (quality.checked && fast.checked) {
            cheap.disabled = true; // Отключаем "Дешево"
        } else if (cheap.checked && fast.checked) {
            quality.disabled = true; // Отключаем "Качественно"
        } else {
            // Если ни одно из вышеуказанных условий не выполнено, все переключатели включены
            fast.disabled = false;
            cheap.disabled = false;
            quality.disabled = false;
        }
    }

    quality.addEventListener('change', handleChange);
    cheap.addEventListener('change', handleChange);
    fast.addEventListener('change', handleChange);
});
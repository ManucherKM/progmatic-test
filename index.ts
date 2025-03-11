// Функция для рекурсивной генерации выражений
function generateExpressions(digits: string, index: number, expr: string, results: string[]): void {
    // Если достигли последней цифры, оцениваем выражение
    if (index === digits.length - 1) {
        try {
            // Используем eval для вычисления выражения
            if (eval(expr) === 200) {
                results.push(expr + " = 200");
            }
        } catch (e) {
            // В случае ошибки (хотя она маловероятна) пропускаем выражение
        }
        return;
    }
    
    // Возможные операторы: пустая строка (конкатенация), плюс и минус
    const operators = ["", "+", "-"];
    // Перебираем все варианты для текущего промежутка
    for (const op of operators) {
        // Формируем новое выражение, добавляя оператор и следующую цифру
        const newExpr = expr + op + digits[index + 1];
        generateExpressions(digits, index + 1, newExpr, results);
    }
}

// Основная часть программы
const digits = "9876543210";
const results: string[] = [];

// Начинаем с первой цифры
generateExpressions(digits, 0, digits[0], results);

// Выводим найденные решения в консоль
for (const res of results) {
    console.log(res);
}

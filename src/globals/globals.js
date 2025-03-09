// Глобальный флаг показывает, идет ли отправка откликов в данный момент
let isSubmitting = false;

// Функция возвращает текущее состояние отправки откликов
export function getIsSubmitting() {
  return isSubmitting;
}

// Функция изменяет состояние флага отправки откликов
export function setIsSubmitting(value) {
  isSubmitting = value;
}

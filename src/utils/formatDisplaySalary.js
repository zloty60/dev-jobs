export function formatDisplaySalary(salary) {
  return salary.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

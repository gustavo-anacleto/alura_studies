function formatHour_HH_MM_ss(date: Date): string {
  return date.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}

export { formatHour_HH_MM_ss };

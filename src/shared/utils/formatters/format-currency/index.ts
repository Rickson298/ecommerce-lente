import { FormatCurrencyTypes } from "./types";

export function formatCurrency({ amount }: FormatCurrencyTypes) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(amount);
}

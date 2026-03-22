const parseCurrency = (value) => {
  if (!value) return 0;
  const cleaned = value
    .toString()
    .replace(/[^\d,-]/g, "")
    .replace(".", "")
    .replace(",", ".");
  return parseFloat(cleaned) || 0;
};

//Formatação para moeda BRL na exibição usando BRL.format(value)
const BRL = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export { parseCurrency, BRL };

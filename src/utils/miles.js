// Los montos se escriben como en Argentina: con punto cada tres cifras, a medida que se tipea
// ("10000" se ve "10.000"). Lo que se guarda es el número; lo que se ve, con puntos.
export const soloDigitos = (v) => String(v ?? '').replace(/\D/g, '');

export const conPuntos = (v) => {
  const d = soloDigitos(v).replace(/^0+(?=\d)/, '').slice(0, 13);
  return d ? Number(d).toLocaleString('es-AR', { maximumFractionDigits: 0 }) : '';
};

